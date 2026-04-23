import { Icon } from "@/components/icons";
import { openingHours } from "@/lib/content";

export function OpeningHoursSection() {
  return (
    <section id="ordinacne-hodiny" className="section section-white">
      <div className="container split-grid">
        <div className="section-heading compact">
          <p>Ordinačné hodiny</p>
          <h2>Prehľadný rozvrh pripravený na doplnenie</h2>
          <span>Časy sú neutrálne editovateľné hodnoty, aby sa nezverejnil neoverený rozvrh ambulancie.</span>
        </div>

        <div className="hours-card">
          {openingHours.map((row) => (
            <div key={row.day} className="hours-row">
              <div>
                <span className="row-icon">
                  <Icon name="timer" className="icon-sm" />
                </span>
                <strong>{row.day}</strong>
              </div>
              <span>{row.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
