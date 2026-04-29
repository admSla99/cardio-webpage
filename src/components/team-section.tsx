import Image from "next/image";
import { doctors } from "@/lib/content";

export function TeamSection() {
  return (
    <section id="tim" className="section section-surface">
      <div className="container split-grid">
        <div className="section-heading compact">
          <p>Tím</p>
          <h2>Odborný tím s pokojnou komunikáciou</h2>
          <span>Ambulanciu vedie MUDr. Eva Hrbatá spolu so sestrou Andreou Slaninkovou.</span>
        </div>

        <div className="team-grid">
          {doctors.map((doctor, index) => (
            <article key={`${doctor.name}-${index}`} className="card team-card">
              <Image src={doctor.image} alt="" width={900} height={650} />
              <div>
                <h3>{doctor.name}</h3>
                <p>{doctor.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
