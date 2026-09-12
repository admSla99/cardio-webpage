import { services, siteConfig } from "@/lib/content";
import { getContact, getOpeningHours, type OpeningHoursRow } from "@/lib/site-content";

const dayOfWeekMap: Record<string, string> = {
  Pondelok: "Monday",
  Utorok: "Tuesday",
  Streda: "Wednesday",
  Štvrtok: "Thursday",
  Piatok: "Friday",
  Sobota: "Saturday",
  Nedeľa: "Sunday",
};

function buildOpeningHoursSpecification(openingHours: readonly OpeningHoursRow[]) {
  return openingHours
    .filter((row) => row.hours !== "neordinuje" && dayOfWeekMap[row.day])
    .map((row) => {
      const [opens, closes] = row.hours.split("-");

      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayOfWeekMap[row.day],
        opens,
        closes,
      };
    });
}

export async function StructuredData() {
  const [contact, openingHours] = await Promise.all([getContact(), getOpeningHours()]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteConfig.url}/#medical-clinic`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}/images/entry.webp`,
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    hasMap: contact.mapEmbedUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "SNP 501/1",
      postalCode: "083 01",
      addressLocality: "Sabinov",
      addressCountry: "SK",
    },
    areaServed: {
      "@type": "City",
      name: "Sabinov",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.0990833,
      longitude: 21.1083056,
    },
    medicalSpecialty: [
      "https://schema.org/Cardiovascular",
      {
        "@type": "MedicalSpecialty",
        name: "Vnútorné lekárstvo",
      },
    ],
    availableService: services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service.title,
      description: service.description,
    })),
    openingHoursSpecification: buildOpeningHoursSpecification(openingHours),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\u003c"),
      }}
    />
  );
}
