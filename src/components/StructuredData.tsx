import Head from "next/head";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://greenclean.cz";

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "GreenClean",
  description: "Profesionální úklidové služby v Praze a okolí. Úklid kanceláří, bytů, Airbnb, úklid po rekonstrukci.",
  url: SITE_URL,
  telephone: "+420123456789",
  email: "info@greenclean.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wenceslas Square 123",
    addressLocality: "Prague",
    postalCode: "110 00",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.0755,
    longitude: 14.4378,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.0755, longitude: 14.4378 },
    geoRadius: "50000",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [],
};

export function StructuredData() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD),
        }}
      />
    </Head>
  );
}
