import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = ({ openModal }) => {
  const handleBookPickup = () => {
    if (openModal) {
      openModal();
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+918828700630';
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight"
          >
            Ready to Declutter?
            <span className="block text-yellow-300">Turn Your Scrap into Cash!</span>
          </h2>

          <p 
            className="text-sm lg:text-base text-green-100 mb-6 max-w-xl mx-auto"
          >
            Schedule a free pickup and get paid instantly. Fast, free, and eco-friendly.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          >
            <Button 
              onClick={handleBookPickup}
              size="sm"
              className="w-full sm:w-auto text-sm font-bold bg-yellow-400 text-gray-900 hover:bg-yellow-500 px-6 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out group"
            >
              Book FREE Pickup
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              onClick={handleCallNow}
              variant="outline"
              size="sm"
              className="w-full sm:w-auto text-sm font-semibold border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 py-5 rounded-full transition-colors duration-300"
            >
              <Phone className="mr-2 w-4 h-4" />
              Call Now
            </Button>
          </motion.div>

          <motion.div 
            className="mt-6 text-green-200 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            >
            <p>Questions? <a href="/contact" className="font-semibold text-white underline hover:text-yellow-300">Contact us</a></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
