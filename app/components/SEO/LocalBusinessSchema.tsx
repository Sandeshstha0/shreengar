interface LocalBusinessSchemaProps {
  url: string;
}

export default function LocalBusinessSchema({
  url,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",

    "@id": `${url}/#business`,

    name: "Shreengar Makeup Studio",

    url,

    image: `${url}/logo.png`,

    logo: `${url}/logo.png`,

    description:
      "Professional bridal makeup, engagement makeup, reception makeup, party makeup and beauty services in Nepal.",

    telephone: "+977-98XXXXXXXX",

    email: "info@shreengar.com.np",

    priceRange: "$$",

    areaServed: "Nepal",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Pokhara",
      addressRegion: "Gandaki",
      postalCode: "33700",
      addressCountry: "NP",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.2096",
      longitude: "83.9856",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],

    sameAs: [
      "https://facebook.com/yourpage",
      "https://instagram.com/yourpage",
      "https://tiktok.com/@yourpage",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty Services",

      itemListElement: [
        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name: "Bridal Makeup",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name: "Engagement Makeup",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name: "Reception Makeup",
          },
        },

        {
          "@type": "Offer",

          itemOffered: {
            "@type": "Service",
            name: "Party Makeup",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}