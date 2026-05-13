import Link from "next/link";
import { Icon } from "@/components/icons";
import { contact, footerLinks, siteConfig } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="footer-mark">
              <Icon name="pulse" className="icon-md" />
            </span>
            <span>{siteConfig.name}</span>
          </div>
          <p className="footer-copy">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="footer-title">Navigácia</h2>
          <nav className="footer-links" aria-label="Navigácia v pätičke">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="footer-title">Kontakt</h2>
          <div className="footer-copy">
            <p>{contact.location}</p>
            <p>{contact.addressLine}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {year} MEDEPH s.r.o. - Odborná kardiologická a interná ambulancia. Všetky práva vyhradené.
          </span>
          <span className="footer-credit">Vytvoril Adam Slaninka</span>
        </div>
      </div>
    </footer>
  );
}
