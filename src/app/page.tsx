import { ContactSection } from "@/components/contact-section";
import { CookieConsent } from "@/components/cookie-consent";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { NoticePopup } from "@/components/notice-popup";
import { OpeningHoursSection } from "@/components/opening-hours-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { TeamSection } from "@/components/team-section";
import { activeOpeningNotices } from "@/lib/content";

export default function Home() {
  return (
    <>
      <StructuredData />
      <NoticePopup notices={activeOpeningNotices} />
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <OpeningHoursSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
