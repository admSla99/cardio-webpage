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
              Ambulancia pôsobí v Poliklinike Sabinov na adrese SNP 501/1. Objednanie prebieha telefonicky aj mailom.
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
                  {"href" in item ? <a href={item.href}>{item.value}</a> : <strong>{item.value}</strong>}
                </div>
              </div>
            ))}
          </div>

          <a href="tel:+421915148518" className="button button-primary">
            {siteConfig.primaryCta}
          </a>
        </div>

        <div className="map-card">
          <span className="map-icon">
            <Icon name="pin" className="icon-lg" />
          </span>
          <div>
            <h3>{contact.location}</h3>
            <p>
              {contact.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
          <div className="map-placeholder">
            <iframe
              className="map-frame"
              src={contact.mapEmbedUrl}
              title={`${contact.location} mapa`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="map-meta">
            <strong>{contact.provider}</strong>
            <p>
              {contact.companyId}
              <br />
              Poisťovne: {contact.insurance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
