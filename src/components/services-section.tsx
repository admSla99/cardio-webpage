import { Icon } from "@/components/icons";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <section id="sluzby" className="section section-white">
      <div className="container">
        <div className="section-heading">
          <p>Služby</p>
          <h2>Kardiologická diagnostika v prehľadnej forme</h2>
          <span>
            Základné vyšetrenia a monitorovanie sú pripravené tak, aby bol postup pre pacienta zrozumiteľný a pokojný.
          </span>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="card service-card">
              <div className="accent-line" />
              <span className="card-icon">
                <Icon name={service.icon} className="icon-md" />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
