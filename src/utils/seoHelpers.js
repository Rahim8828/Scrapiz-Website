/**
 * SEO Helper Functions
 * Utilities for generating schema markup and SEO-related functionality
 */

/**
 * Generates comprehensive schema markup for a location page
 * Includes LocalBusiness, Service, and FAQPage schemas
 * 
 * @param {Object} location - Location data object from locationData.js
 * @returns {Object} Schema.org structured data in JSON-LD format
 */
export const generateLocationSchema = (location) => {
  if (!location) {
    throw new Error('Location data is required to generate schema markup');
  }

  // Validate required fields
  validateLocationData(location);

  const baseUrl = 'https://www.scrapiz.in';
  const locationUrl = `${baseUrl}/${location.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // LocalBusiness Schema (RecyclingCenter is a subtype of LocalBusiness)
      {
        "@type": "RecyclingCenter",
        "@id": `${locationUrl}#business`,
        "name": location.nap.businessName,
        "description": location.seo.description,
        "image": `${baseUrl}${location.images.hero}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.nap.address.street,
          "addressLocality": location.nap.address.locality,
          "addressRegion": location.nap.address.region,
          "postalCode": location.nap.address.postalCode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.geo.latitude,
          "longitude": location.geo.longitude
        },
        "telephone": location.nap.phone,
        "email": location.nap.email,
        "url": locationUrl,
        "openingHoursSpecification": location.nap.hours.map(h => {
          const [opens, closes] = parseBusinessHours(h.hours);
          return {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": h.day,
            "opens": opens,
            "closes": closes
          };
        }),
        "priceRange": "$$",
        "areaServed": {
          "@type": "City",
          "name": location.name
        },
        "hasMap": location.geo.mapEmbedUrl
      },
      
      // Service Schema
      {
        "@type": "Service",
        "@id": `${locationUrl}#service`,
        "serviceType": "Scrap Collection and Recycling",
        "provider": {
          "@id": `${locationUrl}#business`
        },
        "areaServed": {
          "@type": "City",
          "name": location.name
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Scrap Materials Accepted",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Iron & Steel Scrap Collection",
                "description": "Collection and recycling of iron and steel scrap materials"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Aluminum Scrap Collection",
                "description": "Collection and recycling of aluminum scrap materials"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Copper Scrap Collection",
                "description": "Collection and recycling of copper scrap materials"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Waste Collection",
                "description": "Collection and recycling of electronic waste"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Paper & Plastic Scrap Collection",
                "description": "Collection and recycling of paper and plastic materials"
              }
            }
          ]
        }
      },
      
      // FAQPage Schema (only if FAQs are present)
      ...(location.faqs && location.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "@id": `${locationUrl}#faq`,
        "mainEntity": location.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : [])
    ]
  };
};

/**
 * Parses business hours string into opens and closes times
 * Handles formats like "9:00 AM - 10:00 PM"
 * 
 * @param {string} hoursString - Business hours string
 * @returns {Array<string>} [opens, closes] in 24-hour format
 */
const parseBusinessHours = (hoursString) => {
  if (!hoursString || typeof hoursString !== 'string') {
    return ['09:00', '22:00']; // Default fallback
  }

  const parts = hoursString.split(' - ');
  if (parts.length !== 2) {
    return ['09:00', '22:00']; // Default fallback
  }

  const opens = convertTo24Hour(parts[0].trim());
  const closes = convertTo24Hour(parts[1].trim());

  return [opens, closes];
};

/**
 * Converts 12-hour time format to 24-hour format
 * 
 * @param {string} time12h - Time in 12-hour format (e.g., "9:00 AM")
 * @returns {string} Time in 24-hour format (e.g., "09:00")
 */
const convertTo24Hour = (time12h) => {
  const [time, period] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  
  hours = parseInt(hours, 10);
  
  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }
  
  return `${hours.toString().padStart(2, '0')}:${minutes}`;
};

/**
 * Validates that location data has all required fields for schema generation
 * 
 * @param {Object} location - Location data object
 * @throws {Error} If required fields are missing
 */
export const validateLocationData = (location) => {
  const requiredFields = [
    'slug',
    'nap.businessName',
    'nap.address.street',
    'nap.address.locality',
    'nap.address.region',
    'nap.address.postalCode',
    'nap.phone',
    'nap.email',
    'nap.hours',
    'geo.latitude',
    'geo.longitude',
    'seo.description',
    'images.hero'
  ];

  const errors = [];

  requiredFields.forEach(field => {
    const value = getNestedValue(location, field);
    if (value === undefined || value === null || value === '') {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Validate coordinates are within valid ranges
  if (location.geo) {
    if (location.geo.latitude < -90 || location.geo.latitude > 90) {
      errors.push('Invalid latitude: must be between -90 and 90');
    }
    if (location.geo.longitude < -180 || location.geo.longitude > 180) {
      errors.push('Invalid longitude: must be between -180 and 180');
    }
  }

  // Validate hours array
  if (location.nap && location.nap.hours) {
    if (!Array.isArray(location.nap.hours) || location.nap.hours.length === 0) {
      errors.push('Business hours must be a non-empty array');
    }
  }

  if (errors.length > 0) {
    throw new Error(`Location data validation failed:\n${errors.join('\n')}`);
  }

  return true;
};

/**
 * Gets a nested value from an object using dot notation
 * 
 * @param {Object} obj - Object to get value from
 * @param {string} path - Dot-notation path (e.g., "nap.address.street")
 * @returns {*} Value at the path, or undefined if not found
 */
const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

/**
 * Validates schema markup against basic schema.org requirements
 * 
 * @param {Object} schema - Schema object to validate
 * @returns {Object} Validation result with isValid boolean and errors array
 */
export const validateSchema = (schema) => {
  const errors = [];

  if (!schema || typeof schema !== 'object') {
    return { isValid: false, errors: ['Schema must be an object'] };
  }

  // Check for required top-level properties
  if (schema['@context'] !== 'https://schema.org') {
    errors.push('Schema must have @context set to "https://schema.org"');
  }

  if (!schema['@graph'] || !Array.isArray(schema['@graph'])) {
    errors.push('Schema must have @graph array');
  }

  // Validate LocalBusiness schema
  const localBusiness = schema['@graph']?.find(item => 
    item['@type'] === 'RecyclingCenter' || item['@type'] === 'LocalBusiness'
  );

  if (!localBusiness) {
    errors.push('Schema must include LocalBusiness or RecyclingCenter type');
  } else {
    // Check required LocalBusiness fields
    const requiredBusinessFields = ['name', 'address', 'telephone', 'geo'];
    requiredBusinessFields.forEach(field => {
      if (!localBusiness[field]) {
        errors.push(`LocalBusiness schema missing required field: ${field}`);
      }
    });

    // Validate address
    if (localBusiness.address) {
      const requiredAddressFields = ['streetAddress', 'addressLocality', 'addressRegion', 'postalCode'];
      requiredAddressFields.forEach(field => {
        if (!localBusiness.address[field]) {
          errors.push(`Address missing required field: ${field}`);
        }
      });
    }

    // Validate geo coordinates
    if (localBusiness.geo) {
      if (typeof localBusiness.geo.latitude !== 'number' || 
          typeof localBusiness.geo.longitude !== 'number') {
        errors.push('Geo coordinates must be numbers');
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Generates a minimal fallback schema when full location data is unavailable
 * 
 * @param {Object} partialLocation - Partial location data
 * @returns {Object} Minimal schema markup
 */
export const generateFallbackSchema = (partialLocation) => {
  return {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    "name": partialLocation.nap?.businessName || "Scrapiz - Scrap Buyers in Mumbai",
    "description": partialLocation.seo?.description || "Scrap buying and recycling services in Mumbai",
    "url": partialLocation.seo?.canonical || "https://www.scrapiz.in"
  };
};
