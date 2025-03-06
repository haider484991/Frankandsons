import React from 'react';
import { City, State } from "@/lib/types";

interface SchemaOrgProps {
  name: string;
  description: string;
  city: City;
  state: State;
  service: string;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({ name, description, city, state, service }) => {
  if (!city || !state) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Frank And Sons Exterminators",
      "telephone": "1-833-581-1133",
      "url": "https://frankandsonsexterminators.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressRegion": state.abbreviation,
        "addressCountry": "US"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "state": state.name
    },
    "description": description,
    "serviceType": service,
    "offers": {
      "@type": "Offer",
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "state": state.name
      },
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://frankandsonsexterminators.com/${state.id}/${city.name.toLowerCase().replace(/\s+/g, '-')}`,
      "servicePhone": "1-833-581-1133"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaOrg;