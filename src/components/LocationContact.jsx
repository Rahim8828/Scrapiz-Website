import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';

/**
 * LocationContact Component
 * Displays contact information with NAP consistency
 * @param {Object} location - Location data object from locationData.js
 */
const LocationContact = ({ location }) => {
  if (!location) return null;

  const { nap, name } = location;

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Contact Your Local Scrap Buyer in {name}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for instant scrap pickup and best scrap rates in {name}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Business Name & Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-base font-semibold text-green-700 mb-2">{nap.businessName}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{nap.address.fullAddress}</p>
                </div>
              </div>
            </motion.div>

            {/* Phone & Email */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                    <a
                      href={`tel:${nap.phone}`}
                      className="text-base font-semibold text-green-700 hover:text-green-800 transition-colors"
                    >
                      {nap.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                    <a
                      href={`mailto:${nap.email}`}
                      className="text-base font-semibold text-green-700 hover:text-green-800 transition-colors"
                    >
                      {nap.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Business Hours</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {nap.hours.map((schedule, index) => (
                      <div 
                        key={index} 
                        className="bg-white px-3 py-2.5 rounded-lg shadow-sm border border-gray-100 hover:border-green-200 transition-colors"
                      >
                        <div className="flex flex-col space-y-1">
                          <span className="text-sm font-bold text-gray-800">{schedule.day}</span>
                          <span className="text-xs text-gray-600 font-medium">{schedule.hours}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <a
              href={`tel:${nap.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${nap.phone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${nap.email}`}
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span>Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
