import * as React from "react";

type SchemaType = "Organization" | "Website" | "LocalBusiness" | "Breadcrumbs" | "FAQ";

interface JsonLdProps {
  type: SchemaType;
  data?: any; // Custom dynamic data for breadcrumbs/FAQ
}

export const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  const baseUrl = "https://www.restyletiling.com";

  let schema: Record<string, any> = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case "Organization":
      schema = {
        ...schema,
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Restyle Wall & Floor Tiling",
        "url": baseUrl,
        "logo": `${baseUrl}/restyle-logo.png`,
        "sameAs": [
          "https://www.facebook.com/restylewallandfloortiling",
          "https://www.instagram.com/restyletiling"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+44-7889-890122",
          "contactType": "customer support",
          "areaServed": "GB",
          "availableLanguage": ["English"]
        }
      };
      break;

    case "Website":
      schema = {
        ...schema,
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "name": "Restyle Wall & Floor Tiling",
        "url": baseUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
      break;

    case "LocalBusiness":
      schema = {
        ...schema,
        "@type": "HomeAndConstructionBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        "name": "Restyle Wall & Floor Tiling",
        "image": [
          `${baseUrl}/images/bathroom-tiling.png`,
          `${baseUrl}/images/floor-tiling.png`,
          `${baseUrl}/images/wall-tiling.png`
        ],
        "telephone": "+44-7889-890122",
        "email": "info@restyletiling.com",
        "priceRange": "$$",
        "url": baseUrl,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "London & surrounding areas",
          "addressRegion": "England",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.5074,
          "longitude": -0.1278
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Greater London and surrounding regions"
        }
      };
      break;

    case "Breadcrumbs":
      if (!data || !Array.isArray(data)) return null;
      schema = {
        ...schema,
        "@type": "BreadcrumbList",
        "itemListElement": data.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${baseUrl}${item.path}`
        }))
      };
      break;

    case "FAQ":
      if (!data || !Array.isArray(data)) return null;
      schema = {
        ...schema,
        "@type": "FAQPage",
        "mainEntity": data.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
