import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Edit3, Check, X, Shield, Sparkles, Image as ImageIcon, Download, Upload } from "lucide-react";
import { saveEditsToAllClouds } from "../lib/cloudSync";
import { getFromIndexedDB } from "../lib/indexedDbStorage";

// Automatic image optimization helper to convert heavy photos into lightweight Web/Mobile friendly Base64 JPEGs
const compressImage = (base64Str: string, maxWidth = 1200, quality = 0.82): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      } else {
        resolve(base64Str);
      }
    };
    img.onerror = () => resolve(base64Str);
  });
};

export function VisualEditorOverlay() {
  const [isActive, setIsActive] = useState(false);
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
  const [activeType, setActiveType] = useState<"text" | "image">("text");
  const [tempText, setTempText] = useState("");
  const [tempImgSrc, setTempImgSrc] = useState("");
  const location = useLocation();

  // Load and apply saved CMS edits from localStorage on mount and route change
  useEffect(() => {
    const checkMode = () => {
      const mode = localStorage.getItem("aama_visual_edit_mode") === "true";
      const isAdmin = localStorage.getItem("aama_admin_auth") === "true";
      setIsActive(mode && isAdmin);
    };

    checkMode();

    // Clear old invalid localStorage edits that might have contained brackets
    try {
      const savedEditsStr = localStorage.getItem("aama_visual_edits");
      if (savedEditsStr) {
        const edits = JSON.parse(savedEditsStr);
        let hasInvalid = false;
        Object.keys(edits).forEach(path => {
          Object.keys(edits[path]).forEach(sel => {
            if (sel.includes("[")) hasInvalid = true;
          });
        });
        if (hasInvalid) {
          localStorage.removeItem("aama_visual_edits");
        } else {
          const pathEdits = edits[location.pathname] || {};
          setTimeout(() => {
            Object.entries(pathEdits).forEach(([selector, val]: [string, any]) => {
              try {
                const el = document.querySelector(selector) as HTMLElement;
                if (el) {
                  if (val.type === "text") {
                    el.textContent = val.content;
                  } else if (val.type === "image") {
                    (el as HTMLImageElement).src = val.content;
                  }
                }
              } catch (e) {
                // ignore invalid selector
              }
            });
          }, 300);
        }
      }
    } catch (err) {
      console.error("Error loading visual edits:", err);
      localStorage.removeItem("aama_visual_edits");
    }

    window.addEventListener("storage", checkMode);
    window.addEventListener("aama_mode_change", checkMode as EventListener);

    return () => {
      window.removeEventListener("storage", checkMode);
      window.removeEventListener("aama_mode_change", checkMode as EventListener);
    };
  }, [location.pathname]);

  // Handle hover and click interactions in Visual Edit Mode (ignoring headers and nav links)
  useEffect(() => {
    if (!isActive) return;

    const isIgnored = (el: HTMLElement) => {
      return (
        el.closest("header") || 
        el.closest("nav") || 
        el.tagName === "A" || 
        el.closest("a") || 
        el.closest("#aama-visual-editor-toolbar") || 
        el.closest("#aama-visual-modal")
      );
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target !== document.body && !isIgnored(target)) {
        target.style.outline = "2px dashed #E1A140";
        target.style.cursor = "pointer";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target !== document.body && !isIgnored(target)) {
        target.style.outline = "";
        target.style.cursor = "";
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && !isIgnored(target)) {
        e.preventDefault();
        e.stopPropagation();

        // Robust image detection: check if target is img, inside img, or contains img
        let imgEl = target.tagName === "IMG" 
          ? (target as HTMLImageElement) 
          : (target.closest("img") as HTMLImageElement) || target.querySelector("img");
        
        if (!imgEl && target.parentElement) {
          imgEl = target.parentElement.querySelector("img");
        }

        if (imgEl) {
          imgEl.style.outline = "2px solid #E1A140";
          setActiveElement(imgEl);
          setActiveType("image");
          setTempImgSrc(imgEl.src || "");
        } else if (target.textContent && target.textContent.trim().length > 0) {
          target.style.outline = "2px solid #E1A140";
          setActiveElement(target);
          setActiveType("text");
          setTempText(target.textContent.trim() || "");
        }
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("click", handleClick, true);
    };
  }, [isActive]);

  if (!isActive) return null;

  // Helper to generate a stable CSS selector using IDs, data-cms-id, alt tags, or nth-of-type
  const getUniqueSelector = (el: HTMLElement): string => {
    if (el.getAttribute("data-cms-id")) return `[data-cms-id="${el.getAttribute("data-cms-id")}"]`;
    if (el.id) return `#${el.id}`;
    if (el.tagName === "IMG" && el.getAttribute("alt")) {
      const altVal = el.getAttribute("alt")?.trim();
      if (altVal) return `img[alt="${altVal}"]`;
    }
    let path = [];
    let current: HTMLElement | null = el;
    while (current && current !== document.body && current !== document.documentElement) {
      if (current.getAttribute("data-cms-id")) {
        path.unshift(`[data-cms-id="${current.getAttribute("data-cms-id")}"]`);
        break;
      }
      if (current.id) {
        path.unshift(`#${current.id}`);
        break;
      }
      let selector = current.tagName.toLowerCase();
      const siblings = Array.from(current.parentElement?.children || []).filter(c => c.tagName === current?.tagName);
      if (siblings.length > 1) {
        const index = siblings.indexOf(current);
        selector += `:nth-of-type(${index + 1})`;
      }
      path.unshift(selector);
      current = current.parentElement;
    }
    return path.join(" > ");
  };

  const handleSave = async () => {
    if (activeElement) {
      const selector = getUniqueSelector(activeElement);
      let originalSrc = "";
      let alt = "";
      let originalText = "";

      if (activeType === "image") {
        const imgEl = activeElement as HTMLImageElement;
        originalSrc = imgEl.src;
        alt = imgEl.alt || "";
        imgEl.src = tempImgSrc;
      } else if (activeType === "text") {
        originalText = activeElement.textContent || "";
        activeElement.textContent = tempText;
      }

      // Save to localStorage & Cloud Databases
      try {
        const savedEditsStr = localStorage.getItem("aama_visual_edits");
        const edits = savedEditsStr ? JSON.parse(savedEditsStr) : {};
        if (!edits[location.pathname]) {
          edits[location.pathname] = {};
        }
        edits[location.pathname][selector] = {
          type: activeType,
          content: activeType === "text" ? tempText : tempImgSrc,
          originalSrc,
          alt,
          originalText
        };

        window.dispatchEvent(new Event("aama_visual_edit_saved"));

        // Save directly across all cloud endpoints for guaranteed cross-device sync
        await saveEditsToAllClouds(edits);
      } catch (err) {
        console.error("Failed to save visual edit to cloud:", err);
      }

      activeElement.style.outline = "";
      setActiveElement(null);
    }
  };

  const handleCancel = () => {
    if (activeElement) {
      activeElement.style.outline = "";
      setActiveElement(null);
    }
  };

  const turnOffEditor = () => {
    localStorage.setItem("aama_visual_edit_mode", "false");
    setIsActive(false);
    window.location.reload();
  };

  const exportBackupJSON = async () => {
    try {
      const edits = (await getFromIndexedDB("aama_global_edits")) || JSON.parse(localStorage.getItem("aama_visual_edits") || "{}");
      const blob = new Blob([JSON.stringify(edits, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `aama_visual_edits_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      alert("Failed to export backup: " + e);
    }
  };

  const importBackupJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json && typeof json === "object") {
          await saveEditsToAllClouds(json);
          window.dispatchEvent(new Event("aama_visual_edit_saved"));
          alert("Visual edits backup imported successfully! Refreshing page...");
          window.location.reload();
        }
      } catch (err) {
        alert("Invalid JSON backup file!");
      }
    };
    reader.readAsText(file);
  };

  const resetAllEdits = async () => {
    if (window.confirm("Are you sure you want to reset all visual edits and restore default code images?")) {
      localStorage.removeItem("aama_visual_edits");
      try {
        await saveEditsToAllClouds({});
      } catch (e) {}
      alert("All visual edits reset! Restoring hardcoded code assets...");
      window.location.reload();
    }
  };

  return (
    <>
      {/* FLOATING ADMIN TOOLBAR */}
      <div 
        id="aama-visual-editor-toolbar" 
        className="fixed bottom-6 right-6 z-[9999] bg-neutral-900 border-2 border-[#E1A140] p-4 shadow-2xl flex items-center gap-3 text-white font-sans flex-wrap max-w-2xl"
      >
        <div className="flex items-center gap-2 mr-2">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
          <div>
            <span className="text-[10px] font-mono text-[#E1A140] font-bold uppercase block">Visual Edit Mode ON</span>
            <span className="text-xs font-bold">Click any text or image to edit</span>
          </div>
        </div>

        <button
          onClick={exportBackupJSON}
          className="bg-neutral-800 border border-[#E1A140]/60 text-[#E1A140] px-2.5 py-1.5 text-xs font-bold uppercase hover:bg-neutral-700 transition-colors cursor-pointer flex items-center gap-1 rounded-sm"
          title="Download a JSON backup file of all your visual edits"
        >
          <Download size={13} /> Export JSON
        </button>

        <label
          className="bg-neutral-800 border border-[#E1A140]/60 text-[#E1A140] px-2.5 py-1.5 text-xs font-bold uppercase hover:bg-neutral-700 transition-colors cursor-pointer flex items-center gap-1 rounded-sm"
          title="Upload a JSON backup file to restore visual edits"
        >
          <Upload size={13} /> Import JSON
          <input
            type="file"
            accept=".json"
            onChange={importBackupJSON}
            className="hidden"
          />
        </label>

        <button
          onClick={resetAllEdits}
          className="bg-neutral-800 border border-neutral-600 text-neutral-300 px-2.5 py-1.5 text-xs font-bold uppercase hover:bg-neutral-700 transition-colors cursor-pointer rounded-sm"
          title="Reset overrides and restore default code images"
        >
          Reset Defaults
        </button>

        <button
          onClick={turnOffEditor}
          className="bg-red-950/80 border border-red-500 text-red-200 px-3 py-1.5 text-xs font-bold uppercase hover:bg-red-900 transition-colors cursor-pointer rounded-sm ml-auto"
        >
          Exit Visual Mode
        </button>
      </div>

      {/* MODAL EDITOR POPUP FOR SELECTED ELEMENT */}
      {activeElement && (
        <div id="aama-visual-modal" className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-[#E1A140] p-6 max-w-lg w-full space-y-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase font-mono tracking-widest text-[#E1A140] font-bold flex items-center gap-1.5">
                <Sparkles size={14} /> Live {activeType === "text" ? "Text" : "Image"} CMS Editor
              </span>
              <button onClick={handleCancel} className="text-neutral-400 hover:text-white cursor-pointer">
                <X size={18} />
              </button>
            </div>

            {activeType === "text" ? (
              <div>
                <label className="block text-xs uppercase font-bold text-neutral-300 mb-2">Edit Text Content:</label>
                <textarea
                  value={tempText}
                  onChange={(e) => setTempText(e.target.value)}
                  rows={4}
                  className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-sm focus:outline-none focus:border-[#E1A140]"
                ></textarea>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-neutral-300 mb-2">Upload Local Image File:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = async (event) => {
                        const rawBase64 = event.target?.result as string;
                        if (rawBase64) {
                          const compressed = await compressImage(rawBase64, 1200, 0.85);
                          setTempImgSrc(compressed);
                        }
                      };
                      reader.readAsDataURL(file);
                    }}
                    className="w-full bg-neutral-950 border border-white/20 p-2 text-white text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#E1A140] file:text-black hover:file:bg-amber-300 cursor-pointer"
                  />
                  <span className="text-[11px] text-neutral-400 mt-1 block">Browse and select any PNG or JPG photo directly from your device.</span>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-neutral-300 mb-2">Or Paste Image Source URL:</label>
                  <input
                    type="text"
                    value={tempImgSrc}
                    onChange={(e) => setTempImgSrc(e.target.value)}
                    placeholder="Paste image URL (Unsplash or direct image link)"
                    className="w-full bg-neutral-950 border border-white/20 p-3 text-white text-sm focus:outline-none focus:border-[#E1A140]"
                  />
                  <span className="text-[11px] text-neutral-400 mt-1 block">Tip: Paste any high-res image link to update portraits or clinical photos instantly.</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-neutral-400 block mb-2">Or select a professional preset:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTempImgSrc("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200")}
                      className="bg-neutral-950 border border-white/10 p-2 text-xs text-left hover:border-[#E1A140] truncate"
                    >
                      Dr. Shumaila Portrait
                    </button>
                    <button
                      type="button"
                      onClick={() => setTempImgSrc("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=900")}
                      className="bg-neutral-950 border border-white/10 p-2 text-xs text-left hover:border-[#E1A140] truncate"
                    >
                      Clinical Suite
                    </button>
                  </div>
                </div>

                {tempImgSrc && (
                  <div className="aspect-video w-full bg-neutral-950 border border-white/10 overflow-hidden">
                    <img src={tempImgSrc} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={handleCancel}
                className="border border-white/20 text-white px-4 py-2 text-xs uppercase font-bold tracking-wider hover:bg-white/10 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-[#E1A140] text-black px-5 py-2 text-xs uppercase font-bold tracking-wider hover:bg-amber-300 flex items-center gap-1.5 cursor-pointer"
              >
                <Check size={15} /> Apply &amp; Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
