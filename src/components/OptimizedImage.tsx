import React, { useState, useEffect, useRef } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean; // True for hero / above-the-fold images
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  priority = false,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            obs.disconnect();
          }
        });
      },
      {
        rootMargin: "200px 0px", // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  return (
    <div ref={imgRef as any} className={`overflow-hidden relative bg-neutral-900 ${className}`}>
      {/* Low-res placeholder / shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-800/80 animate-pulse flex items-center justify-center">
          <span className="w-4 h-4 rounded-full border-2 border-[#E1A140] border-t-transparent animate-spin"></span>
        </div>
      )}

      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          {...props}
        />
      )}
    </div>
  );
}
