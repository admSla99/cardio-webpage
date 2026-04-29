import { Icon } from "@/components/icons";
import { openingHours } from "@/lib/content";
import { cn } from "@/lib/utils";

export function OpeningHoursSection() {
  return (
    <section id="ordinacne-hodiny" className="section section-white">
      <div className="container split-grid">
        <div className="section-heading compact">
          <p>Ordinačné hodiny</p>
          <h2>Ordinačné hodiny ambulancie</h2>
          <span>Aktuálny rozvrh ordinácie počas pracovných dní a víkendu.</span>
        </div>

        <div className="hours-card">
          {openingHours.map((row) => (
            <div key={row.day} className={cn("hours-row", row.hours === "neordinuje" && "hours-row-closed")}>
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
