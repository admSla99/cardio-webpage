import Image from "next/image";
import { Icon } from "@/components/icons";
import { heroHeadlineWords, heroStats, siteConfig } from "@/lib/content";

export function HeroSection() {
  const rollingHeadlineWords = [...heroHeadlineWords, heroHeadlineWords[0]];

  return (
    <section id="uvod" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <Icon name="pulse" className="icon-sm" />
            Poliklinika Sabinov
          </div>
          <h1>
            <span>Medeph kardiologická</span>{" "}
            <span className="sr-only">{heroHeadlineWords[0]}</span>
            <span className="hero-title-roller" aria-hidden="true">
              <span className="hero-title-track">
                {rollingHeadlineWords.map((word, index) => (
                  <span key={`${word}-${index}`} className="hero-title-word">
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <p>
            Odborná starostlivosť o vaše srdce v modernom a pokojnom prostredí Polikliniky Sabinov.
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
            src="/images/clinic-hero.svg"
            alt="Ilustračný vizuál modernej kardiologickej ambulancie"
            width={1200}
            height={900}
            priority
          />
        </div>
      </div>
    </section>
  );
}
