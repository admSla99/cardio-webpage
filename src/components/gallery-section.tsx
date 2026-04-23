import Image from "next/image";
import { galleryItems } from "@/lib/content";

export function GallerySection() {
  return (
    <section id="galeria" className="section section-surface">
      <div className="container">
        <div className="gallery-heading">
          <div className="section-heading compact">
            <p>Galéria</p>
            <h2>Čisté a pokojné medicínske prostredie</h2>
          </div>
          <span>Vizuály sú pripravené ako lokálne nahraditeľné assety pre finálne fotografie ambulancie.</span>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure key={item.title} className="gallery-card">
              <Image src={item.image} alt={item.title} width={900} height={650} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
