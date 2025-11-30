import React from 'react';
import { Helmet } from 'react-helmet';
import { locationData } from '../data/locationData';
import { generateLocationSchema } from '../utils/seoHelpers';
import LocationHero from '../components/LocationHero';
import LocationWhyChoose from '../components/LocationWhyChoose';
import LocationServices from '../components/LocationServices';
import LocationContact from '../components/LocationContact';
import LocationMap from '../components/LocationMap';
import LocationFAQ from '../components/LocationFAQ';
import LocationNearby from '../components/LocationNearby';

/**
 * Nalasopara Location Page
 * Displays location-specific content for Nalasopara using centralized data
 * and reusable components for SEO optimization
 */
const Nalasopara = () => {
  // Get location data from centralized configuration
  const location = locationData.nalasopara;
  
  // Generate comprehensive schema markup
  const schema = generateLocationSchema(location);

  return (
    <>
      <Helmet>
        <title>{location.seo.title}</title>
        <meta name="description" content={location.seo.description} />
        <meta name="keywords" content={location.seo.keywords} />
        <link rel="canonical" href={location.seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="bg-white text-gray-800">
        <LocationHero location={location} />
        <LocationWhyChoose location={location} />
        <LocationServices location={location} />
        <LocationContact location={location} />
        <LocationMap location={location} />
        <LocationNearby location={location} />
        <LocationFAQ location={location} />
      </div>
    </>
  );
};

export default Nalasopara;
