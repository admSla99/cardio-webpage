import { Icon } from "@/components/icons";
import { contact, siteConfig } from "@/lib/content";

export function ContactSection() {
  return (
    <section id="kontakt" className="section section-white">
      <div className="container contact-grid">
        <div>
          <div className="section-heading compact">
            <p>Kontakt</p>
            <h2>Nájdete nás v Poliklinike Sabinov</h2>
            <span>
              Kontaktné údaje sú pripravené na doplnenie finálnym telefónnym číslom, presnou adresou a mapovým odkazom.
            </span>
          </div>

          <div className="contact-list">
            {contact.points.map((item) => (
              <div key={item.label} className="contact-item">
                <span className="row-icon">
                  <Icon name={item.icon} className="icon-sm" />
                </span>
                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>

          <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="button button-primary">
            {siteConfig.primaryCta}
          </a>
        </div>

        <div className="map-card">
          <span className="map-icon">
            <Icon name="pin" className="icon-lg" />
          </span>
          <div>
            <h3>{contact.location}</h3>
            <p>{contact.addressLine}</p>
          </div>
          <div className="map-placeholder">
            <strong>Mapový blok</strong>
            <p>Sem sa doplní finálna mapa alebo odkaz na navigáciu po potvrdení presnej adresy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
