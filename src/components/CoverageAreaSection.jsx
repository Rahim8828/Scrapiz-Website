import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check, Phone } from 'lucide-react';

const CoverageAreaSection = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  const coverageAreas = [
    {
      zone: 'Western Suburbs',
      color: 'bg-blue-500',
      areas: ['Bandra', 'Bandra East', 'Jogeshwari', 'Goregaon', 'Kandivali', 'Andheri', 'Malad', 'Borivali']
    },
    {
      zone: 'Central Mumbai',
      color: 'bg-green-500',
      areas: ['Dharavi', 'Mahim', 'Dadar', 'Matunga', 'Sion', 'Kurla', 'Ghatkopar']
    },
    {
      zone: 'Extended Areas',
      color: 'bg-purple-500',
      areas: ['Nalasopara', 'Virar', 'Mira Road', 'Bhayander', 'Vasai', 'Thane']
    }
  ];

  const filteredAreas = selectedZone === 'all' 
    ? coverageAreas 
    : coverageAreas.filter(zone => zone.zone === selectedZone);

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Service Coverage</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We Serve Across <span className="text-gradient">Mumbai</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Doorstep scrap collection service available in major areas across Mumbai and extended suburbs.
          </p>
        </motion.div>

        {/* Zone Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedZone('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedZone === 'all'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Areas
          </button>
          {coverageAreas.map((zone, index) => (
            <button
              key={index}
              onClick={() => setSelectedZone(zone.zone)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedZone === zone.zone
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {zone.zone}
            </button>
          ))}
        </motion.div>

        {/* Coverage Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredAreas.map((zone, zoneIndex) => (
            <motion.div
              key={zoneIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: zoneIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 ${zone.color} rounded-full`}></div>
                <h3 className="text-xl font-bold text-gray-900">{zone.zone}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {zone.areas.map((area, areaIndex) => (
                  <div
                    key={areaIndex}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-50 transition-colors group"
                  >
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-green-700">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white max-w-4xl mx-auto shadow-xl"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Don't See Your Area Listed?
          </h3>
          <p className="text-lg mb-6 text-green-50">
            We're constantly expanding! Call us to check if we serve your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+918828700630"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" strokeWidth={2} />
              Call: +91 8828700630
            </a>
            <a
              href="/locations"
              className="inline-flex items-center gap-2 bg-green-800 text-white px-8 py-3 rounded-full font-bold hover:bg-green-900 transition-colors"
            >
              <MapPin className="w-5 h-5" strokeWidth={2} />
              View All Locations
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoverageAreaSection;
