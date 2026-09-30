import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import firebaseConfigData from "../../firebase-applet-config.json";

const firebaseConfig = {
  apiKey: firebaseConfigData.apiKey,
  authDomain: firebaseConfigData.authDomain,
  projectId: firebaseConfigData.projectId,
  storageBucket: firebaseConfigData.storageBucket,
  messagingSenderId: firebaseConfigData.messagingSenderId,
  appId: firebaseConfigData.appId
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

// Save visual edits directly to cloud Firestore (works on Netlify & all devices)
export async function saveVisualEditsToCloud(editsData: Record<string, any>) {
  try {
    const docRef = doc(db, "site_edits", "global_visual_edits");
    await setDoc(docRef, { edits: editsData, updatedAt: new Date().toISOString() }, { merge: true });
    return true;
  } catch (err) {
    console.warn("Firestore setDoc failed:", err);
    return false;
  }
}

// Fetch visual edits directly from cloud Firestore
export async function fetchVisualEditsFromCloud() {
  try {
    const docRef = doc(db, "site_edits", "global_visual_edits");
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data()?.edits || null;
    }
  } catch (err) {
    console.warn("Firestore getDoc failed:", err);
  }
  return null;
}

// Subscribe to real-time visual edit updates across all devices worldwide
export function subscribeToVisualEdits(callback: (edits: Record<string, any>) => void) {
  try {
    const docRef = doc(db, "site_edits", "global_visual_edits");
    return onSnapshot(docRef, (snap) => {
      if (snap.exists() && snap.data()?.edits) {
        callback(snap.data().edits);
      }
    }, (err) => console.warn("Firestore snapshot listener error:", err));
  } catch (err) {
    console.warn("Firestore subscribe error:", err);
    return () => {};
  }
}
