import Image from "next/image";
import { Icon } from "@/components/icons";
import { heroSpecialtyWords, heroStats, siteConfig } from "@/lib/content";

export function HeroSection() {
  const rollingSpecialtyWords = [...heroSpecialtyWords, heroSpecialtyWords[0]];

  return (
    <section id="uvod" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <Icon name="pulse" className="icon-sm" />
            Poliklinika Sabinov
          </div>
          <h1>
            <span>MEDEPH s.r.o.</span>{" "}
            <span className="sr-only">kardiologická ambulancia a interná ambulancia</span>
            <span className="hero-title-roller" aria-hidden="true">
              <span className="hero-title-track">
                {rollingSpecialtyWords.map((word, index) => (
                  <span key={`${word}-${index}`} className="hero-title-word">
                    {word}
                  </span>
                ))}
              </span>
            </span>{" "}
            <span aria-hidden="true">ambulancia</span>
          </h1>
          <p>
            Odborná starostlivosť o vaše srdce s doplnkovým zameraním na ambulanciu vnútorného lekárstva v
            Poliklinike Sabinov.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="button button-primary">
              {siteConfig.primaryCta}
            </a>
            <a href="#kontakt" className="button button-secondary">
              <Icon name="pin" className="icon-sm" />
              {siteConfig.secondaryCta}
            </a>
          </div>

          <div className="metric-grid">
            {heroStats.map((stat) => (
              <div key={stat.label} className="metric-card">
                <div className="metric-value">{stat.value}</div>
                <div className="metric-label">
                  {stat.label} · {stat.unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/images/pexels-karola-g-5207102.webp"
            alt="Zdravotnícky pracovník so stetoskopom a symbolom srdca pre kardiologickú a internú ambulanciu MEDEPH s.r.o."
            width={6720}
            height={4480}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
