"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryItems } from "@/lib/content";

type GalleryItem = (typeof galleryItems)[number];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section id="galeria" className="section section-surface">
      <div className="container">
        <div className="gallery-heading">
          <div className="section-heading compact">
            <p>Galéria</p>
            <h2>Čisté a pokojné medicínske prostredie</h2>
          </div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure key={item.title} className="gallery-card">
              <button
                type="button"
                className="gallery-trigger"
                onClick={() => setSelectedImage(item)}
                aria-label={`Otvoriť fotografiu: ${item.title}`}
              >
                <Image src={item.image} alt={item.title} width={900} height={1200} />
              </button>
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Zavrieť fotografiu"
          >
            ×
          </button>
          <figure className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedImage.image} alt={selectedImage.title} width={1200} height={1600} priority />
            <figcaption>{selectedImage.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
