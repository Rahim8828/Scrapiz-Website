import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Users } from 'lucide-react';

const PartnerLogosSection = () => {
  const partners = [
    {
      category: 'Recognized By',
      items: [
        { name: 'Startup India', logo: '🇮🇳', type: 'Government Recognition' },
        { name: 'Make in India', logo: '🏭', type: 'Initiative' },
      ]
    },
    {
      category: 'Society Partnerships',
      items: [
        { name: '50+ Housing Societies', logo: '🏘️', count: '50+' },
        { name: 'Residential Complexes', logo: '🏢', count: '30+' },
      ]
    },
    {
      category: 'Corporate Clients',
      items: [
        { name: 'IT Companies', logo: '💻', count: '20+' },
        { name: 'Manufacturing Units', logo: '🏭', count: '15+' },
      ]
    }
  ];

  const stats = [
    { icon: Building2, label: 'Society Tie-ups', value: '50+', color: 'text-blue-600' },
    { icon: Users, label: 'Happy Customers', value: '10,000+', color: 'text-green-600' },
    { icon: Award, label: 'Years of Service', value: '5+', color: 'text-purple-600' }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Trusted Partners</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to serve societies, corporates, and individuals across Mumbai with transparent and reliable scrap collection services.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
              <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partners.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border border-green-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center pb-3 border-b border-gray-200">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.logo}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        {item.type && (
                          <p className="text-xs text-gray-500">{item.type}</p>
                        )}
                      </div>
                    </div>
                    {item.count && (
                      <span className="text-2xl font-bold text-green-600">{item.count}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-white max-w-4xl mx-auto shadow-xl"
        >
          <div className="text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-lg text-green-50 mb-6 max-w-2xl mx-auto">
              Whether you're a housing society, corporate office, or an individual, we provide customized scrap collection solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Become a Partner
              </a>
              <a
                href="tel:+918828700630"
                className="inline-block bg-green-800 text-white px-8 py-3 rounded-full font-bold hover:bg-green-900 transition-colors"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
