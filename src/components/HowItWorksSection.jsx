import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Truck, DollarSign } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Schedule a Pickup',
      description: 'Book your pickup online in just 2 minutes. Choose your preferred date and time.',
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Truck,
      title: 'We Collect Scrap',
      description: 'Our trained team arrives at your doorstep to collect and weigh your scrap materials.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Get Paid Instantly',
      description: 'Receive instant payment via UPI, cash, or bank transfer. No waiting, no hassle!',
      color: 'from-green-600 to-green-700'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Simple 3-step process to turn your scrap into cash
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-green-500 transform translate-x-4 z-0"></div>
              )}

              <div className="relative bg-white rounded-xl p-6 lg:p-7 text-center scrapiz-hover-shadow border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-5 py-2.5 rounded-full text-sm font-semibold">
            <span>⚡</span>
            <span>Average pickup time: 2-4 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;