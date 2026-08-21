import Head from "next/head";

import {
  COMPANY_ICO,
  CONTACT_ADDRESS_LOCALITY,
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  CONTACT_POSTAL_CODE,
  CONTACT_STREET_ADDRESS,
} from "../constants/contact";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://greenclean.cz";

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "GreenClean",
  description: "Profesionální úklidové služby v Praze a okolí. Úklid kanceláří, bytů, Airbnb, úklid po rekonstrukci.",
  url: SITE_URL,
  telephone: CONTACT_PHONE_E164,
  email: CONTACT_EMAIL,
  identifier: {
    "@type": "PropertyValue",
    name: "IČO",
    value: COMPANY_ICO,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_STREET_ADDRESS,
    addressLocality: CONTACT_ADDRESS_LOCALITY,
    postalCode: CONTACT_POSTAL_CODE,
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.106,
    longitude: 14.543,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 50.0755, longitude: 14.4378 },
    geoRadius: "50000",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
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
