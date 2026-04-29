"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems, siteConfig } from "@/lib/content";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolledState = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolledState);
    };
  }, []);

  return (
    <header className={cn("site-header", isScrolled || isOpen ? "site-header-scrolled" : "site-header-top")}>
      <div className="container header-inner">
        <Link href="#uvod" className="brand-link">
          <span className="brand-mark">
            <Icon name="pulse" className="icon-md" />
          </span>
          <span>
            <span className="brand-name">{siteConfig.shortName}</span>
            <span className="brand-subtitle">Kardiologická a interná ambulancia</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Hlavná navigácia">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#kontakt" className="button button-primary header-cta">
          {siteConfig.primaryCta}
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <Icon name={isOpen ? "close" : "menu"} className="icon-md" />
        </button>
      </div>

      {isOpen ? (
        <nav className="mobile-nav container" aria-label="Mobilná navigácia">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="#kontakt" className="button button-primary" onClick={() => setIsOpen(false)}>
            {siteConfig.primaryCta}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
