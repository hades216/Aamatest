import { saveToIndexedDB, getFromIndexedDB } from "./indexedDbStorage";
import { saveVisualEditsToCloud as saveFirebase, fetchVisualEditsFromCloud as fetchFirebase } from "./firebase";

// Deep merge visual edits maps safely
export function mergeEdits(local: Record<string, any>, cloud: Record<string, any>): Record<string, any> {
  if (!local || Object.keys(local).length === 0) return cloud || {};
  if (!cloud || Object.keys(cloud).length === 0) return local || {};

  const merged = { ...cloud, ...local };

  // For each page path key, merge selector entries
  Object.keys(local).forEach((pathKey) => {
    if (pathKey.startsWith("_")) return;
    if (local[pathKey] && typeof local[pathKey] === "object") {
      merged[pathKey] = {
        ...(cloud[pathKey] || {}),
        ...(local[pathKey] || {})
      };
    }
  });

  return merged;
}

// Save visual edits across local IndexedDB, LocalStorage, and background cloud services
export async function saveEditsToAllClouds(editsData: Record<string, any>) {
  if (!editsData || typeof editsData !== "object") return;

  const timestampedEdits = {
    ...editsData,
    _lastUpdated: Date.now()
  };

  // 1. High-capacity, network-proof IndexedDB storage
  await saveToIndexedDB("aama_global_edits", timestampedEdits);

  // 2. LocalStorage fallback
  try {
    localStorage.setItem("aama_visual_edits", JSON.stringify(timestampedEdits));
  } catch (e) {
    /* ignore quota limits */
  }

  // 3. Isolated background Firebase Cloud sync (never blocks UI or throws)
  try {
    saveFirebase(timestampedEdits).catch(() => {});
  } catch (e) {
    /* ignore network errors */
  }

  // 4. Isolated Express API sync
  try {
    fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pageKey: "global_visual_edits",
        content: timestampedEdits
      })
    }).catch(() => {});
  } catch (e) {
    /* ignore network errors */
  }
}

// Fetch visual edits from local IndexedDB first, then merge background cloud data
export async function fetchEditsFromAllClouds(): Promise<Record<string, any> | null> {
  let localData: Record<string, any> = {};

  // 1. Check IndexedDB
  try {
    const idbData = await getFromIndexedDB("aama_global_edits");
    if (idbData && typeof idbData === "object" && Object.keys(idbData).length > 0) {
      localData = idbData;
    }
  } catch (e) {
    /* ignore */
  }

  // 2. Check LocalStorage if IndexedDB was empty
  if (Object.keys(localData).length === 0) {
    try {
      const saved = localStorage.getItem("aama_visual_edits");
      if (saved) {
        localData = JSON.parse(saved);
      }
    } catch (e) {
      /* ignore */
    }
  }

  // 3. Background Cloud Fetch (Firebase)
  let cloudData: Record<string, any> = {};
  try {
    const fbData = await fetchFirebase();
    if (fbData && typeof fbData === "object" && Object.keys(fbData).length > 0) {
      cloudData = fbData;
    }
  } catch (e) {
    /* ignore */
  }

  const result = mergeEdits(localData, cloudData);
  return Object.keys(result).length > 0 ? result : null;
}
