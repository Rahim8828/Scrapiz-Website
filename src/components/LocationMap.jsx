import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

/**
 * LocationMap Component
 * Displays embedded Google Map with location marker
 * Requirements: 5.1, 5.2, 5.3, 5.4
 * 
 * @param {Object} location - Location data object from locationData.js
 * @param {Object} location.geo - Geographic data
 * @param {number} location.geo.latitude - Latitude coordinate
 * @param {number} location.geo.longitude - Longitude coordinate
 * @param {string} location.geo.mapEmbedUrl - Google Maps embed URL
 * @param {string} location.name - Location name
 * @param {Object} location.nap - NAP data
 * @param {Object} location.nap.address - Address information
 */
const LocationMap = ({ location }) => {
  if (!location) return null;

  const { geo, name, nap } = location;

  // Validate required geo data
  if (!geo || !geo.mapEmbedUrl || !geo.latitude || !geo.longitude) {
    console.error(`Missing geo data for location: ${name}`);
    return null;
  }

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Find Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Visit Our Scrap Dealer Shop in {name}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            {nap.address.fullAddress}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Google Maps Embed - Requirements 5.1, 5.2, 5.3, 5.4 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <iframe
              src={geo.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Scrapiz ${name} Location Map - ${nap.address.fullAddress}`}
              className="w-full"
              aria-label={`Interactive map showing Scrapiz ${name} location at ${nap.address.fullAddress}`}
            ></iframe>
          </div>

          {/* Map Info and Directions */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Coordinates:</span> {geo.latitude}, {geo.longitude}
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${geo.latitude},${geo.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label={`Get directions to Scrapiz ${name}`}
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
