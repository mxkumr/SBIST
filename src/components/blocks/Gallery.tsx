"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryProps = {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
  title?: string;
  subtitle?: string;
};

export function Gallery({
  images,
  columns = 3,
  title = "Discover Campus Life",
  subtitle = "Gallery",
}: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-10 text-center">
            {subtitle && (
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-bold text-foreground">{title}</h2>
            )}
          </div>
        )}

        <div className={`grid gap-4 ${gridCols[columns]}`}>
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className={[
                "group relative overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                index === 0 && columns >= 3 ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto aspect-square" : "aspect-square",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={100}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-4 text-left text-white">
                  <p className="text-sm font-semibold">{image.alt}</p>
                  {image.caption && (
                    <p className="text-xs text-white/80">{image.caption}</p>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/10"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              quality={100}
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % images.length);
            }}
            aria-label="Next image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
