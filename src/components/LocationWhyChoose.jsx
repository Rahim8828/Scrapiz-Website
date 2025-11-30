import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BadgeIndianRupee, Leaf, ShieldCheck, MapPin, Star } from 'lucide-react';

/**
 * LocationWhyChoose Component
 * Displays location-specific "Why Choose Us" section with benefits and local context
 * @param {Object} location - Location data object from locationData.js
 */
const LocationWhyChoose = ({ location }) => {
  if (!location) return null;

  const { content, name } = location;

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Pickup',
      description: `Same-day pickup service available in ${name}. Book now and we'll be there within hours.`,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: BadgeIndianRupee,
      title: 'Best Prices',
      description: `Competitive market rates in ${name} with transparent pricing. No hidden charges, ever.`,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Responsible recycling practices that help protect our environment for future generations.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: ShieldCheck,
      title: 'Trusted & Secure',
      description: 'Licensed dealers and certified processes ensure safe and legal transactions.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Doorstep Service',
      description: `No need to transport heavy scrap in ${name}. We come to your location with proper equipment.`,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Professional weighing, quality assessment, and instant digital receipts.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Why Choose <span className="text-gradient">Scrapiz</span> - Your Trusted Scrap Dealer in {name}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            {content.whyChooseIntro}
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            {content.whyChooseDetails}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group"
            >
              <div className={`absolute inset-0 ${benefit.bgColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-14 h-14 lg:w-16 lg:h-16 mb-4 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md`}>
                  <benefit.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>

                <div className="mt-4 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationWhyChoose;
