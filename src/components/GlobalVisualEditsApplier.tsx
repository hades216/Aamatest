import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { subscribeToVisualEdits } from "../lib/firebase";
import { fetchEditsFromAllClouds, mergeEdits } from "../lib/cloudSync";
import { getFromIndexedDB } from "../lib/indexedDbStorage";

export function GlobalVisualEditsApplier() {
  const location = useLocation();

  useEffect(() => {
    const getLocalEdits = (): Record<string, any> => {
      try {
        const saved = localStorage.getItem("aama_visual_edits");
        return saved ? JSON.parse(saved) : {};
      } catch (e) {
        return {};
      }
    };

    const applySingleEdit = (selector: string, val: any) => {
      if (!val || !val.content) return;

      // Strategy 1: Match by CSS Selector
      try {
        if (selector) {
          const el = document.querySelector(selector) as HTMLElement;
          if (el) {
            if (val.type === "image" || el.tagName === "IMG") {
              const imgTarget = el.tagName === "IMG" ? (el as HTMLImageElement) : el.querySelector("img");
              if (imgTarget) {
                if (imgTarget.src !== val.content) {
                  imgTarget.src = val.content;
                }
              }
            } else if (val.type === "text") {
              if (el.textContent !== val.content) {
                el.textContent = val.content;
              }
            }
          }
        }
      } catch (e) {
        /* ignore selector parse error */
      }

      // Strategy 2: If image, check alt text or originalSrc
      if (val.type === "image") {
        const allImgs = Array.from(document.querySelectorAll("img"));
        allImgs.forEach((img) => {
          const srcClean = val.originalSrc ? val.originalSrc.split("?")[0].split("#")[0] : "";
          const imgClean = img.src ? img.src.split("?")[0].split("#")[0] : "";
          const valAlt = val.alt ? val.alt.toLowerCase().trim() : "";
          const imgAlt = img.alt ? img.alt.toLowerCase().trim() : "";

          if (
            (valAlt && imgAlt && valAlt === imgAlt) ||
            (srcClean && imgClean && (imgClean.endsWith(srcClean) || srcClean.endsWith(imgClean)))
          ) {
            if (img.src !== val.content) {
              img.src = val.content;
            }
          }
        });
      }

      // Strategy 3: If text, check original text
      if (val.type === "text" && val.originalText) {
        const allTextElements = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, p, span, div, a, button"));
        allTextElements.forEach((el) => {
          if (el.children.length === 0 && el.textContent && el.textContent.trim() === val.originalText.trim()) {
            if (el.textContent !== val.content) {
              el.textContent = val.content;
            }
          }
        });
      }
    };

    const applyEditsToDOM = (editsData: Record<string, any>) => {
      if (!editsData || typeof editsData !== "object") return;

      const pathKey = `visual_edit_${location.pathname.replace(/[^a-zA-Z0-9]/g, '_')}`;
      const editSets: Array<Record<string, any>> = [];

      if (editsData[location.pathname]) {
        editSets.push(editsData[location.pathname]);
      }
      if (editsData[pathKey]) {
        editSets.push(editsData[pathKey]);
      }
      if (editsData.global_visual_edits && editsData.global_visual_edits[location.pathname]) {
        editSets.push(editsData.global_visual_edits[location.pathname]);
      }
      if (typeof editsData === "object" && !editsData[location.pathname] && !editsData[pathKey]) {
        editSets.push(editsData);
      }

      editSets.forEach((pathEdits) => {
        if (!pathEdits || typeof pathEdits !== "object") return;
        Object.entries(pathEdits).forEach(([selector, val]: [string, any]) => {
          applySingleEdit(selector, val);
        });
      });
    };

    const loadAndApplyAllEdits = async () => {
      const localData = getLocalEdits();
      applyEditsToDOM(localData);

      try {
        const idbData = await getFromIndexedDB("aama_global_edits");
        if (idbData) {
          const mergedLocal = mergeEdits(localData, idbData);
          applyEditsToDOM(mergedLocal);
        }
      } catch (e) {
        /* ignore */
      }

      fetchEditsFromAllClouds()
        .then((cloudData) => {
          if (cloudData) {
            const merged = mergeEdits(getLocalEdits(), cloudData);
            applyEditsToDOM(merged);
          }
        })
        .catch(() => {});
    };

    // Initial load
    loadAndApplyAllEdits();

    // Subscribe to Firebase real-time broadcast
    const unsubscribeCloud = subscribeToVisualEdits((cloudEdits) => {
      if (cloudEdits) {
        const merged = mergeEdits(getLocalEdits(), cloudEdits);
        applyEditsToDOM(merged);
      }
    });

    const handleSync = () => loadAndApplyAllEdits();
    window.addEventListener("aama_visual_edit_saved", handleSync);
    window.addEventListener("storage", handleSync);

    // Continuous enforcement timer and MutationObserver
    const intervalId = setInterval(loadAndApplyAllEdits, 800);

    const observer = new MutationObserver(() => {
      loadAndApplyAllEdits();
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      unsubscribeCloud();
      window.removeEventListener("aama_visual_edit_saved", handleSync);
      window.removeEventListener("storage", handleSync);
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}
