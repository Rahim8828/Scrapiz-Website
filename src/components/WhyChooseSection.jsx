import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BadgeIndianRupee, Leaf, ShieldCheck, MapPin, Star, CheckCircle2, X } from 'lucide-react';

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Instant Pickup',
      description: 'Same-day pickup service available. Book now and we\'ll be there within hours.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: BadgeIndianRupee,
      title: 'Best Prices',
      description: 'Competitive market rates with transparent pricing. No hidden charges, ever.',
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
      description: 'No need to transport heavy scrap. We come to your location with proper equipment.',
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
            Why Choose <span className="text-gradient">Scrapiz</span>?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Mumbai's most trusted scrap collection platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
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
                {/* Icon with enhanced styling */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 mb-4 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md`}>
                  <benefit.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>

                {/* Hover accent line */}
                <div className="mt-4 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-10 border-2 border-gray-200 max-w-5xl mx-auto shadow-xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6 lg:mb-8">
              Scrapiz vs <span className="text-gray-500">Traditional Dealers</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Traditional */}
              <div className="space-y-3 bg-red-50/50 rounded-xl p-5 lg:p-6 border border-red-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-base lg:text-lg font-bold text-gray-800">Traditional Dealers</h4>
                </div>
                {[
                  'Unpredictable pricing',
                  'Long waiting times',
                  'Manual weighing errors',
                  'Cash-only transactions',
                  'No pickup service'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <X className="w-3 h-3 text-red-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Scrapiz */}
              <div className="space-y-3 bg-green-50/50 rounded-xl p-5 lg:p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-base lg:text-lg font-bold text-green-700">With Scrapiz</h4>
                </div>
                {[
                  'Transparent market rates',
                  'Same-day pickup service',
                  'Digital weighing system',
                  'Multiple payment options',
                  'Doorstep collection'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;