import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  canonical?: string;
}

export function SEO({
  title = "IAMA Institute | Institute of Advance Medical Aesthetics",
  description = "Premier hands-on aesthetic medicine training courses for registered medical professionals. Certified Botox, Dermal Fillers, Lasers, and Liquid Rhinoplasty masterclasses in Pakistan.",
  image = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
  type = "website",
  canonical
}: SEOProps) {
  const location = useLocation();
  const currentUrl = canonical || `https://aamaacademy.com${location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // 3. Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute("href", currentUrl);
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      linkCanonical.setAttribute("href", currentUrl);
      document.head.appendChild(linkCanonical);
    }

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", currentUrl);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", image);

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute("content", type);

    // 5. Update Twitter Cards
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    const twImage = document.querySelector('meta[name="twitter:image"]');
    if (twImage) twImage.setAttribute("content", image);
  }, [title, description, image, type, currentUrl]);

  return null;
}
