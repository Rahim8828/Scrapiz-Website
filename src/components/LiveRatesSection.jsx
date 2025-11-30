import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Info } from 'lucide-react';

const LiveRatesSection = () => {
  const scrapRates = [
    {
      category: 'Paper & Cardboard',
      items: [
        { name: 'Newspapers', rate: '14-16', unit: 'kg', icon: '📰' },
        { name: 'Cardboard/Cartons', rate: '10-12', unit: 'kg', icon: '📦' },
        { name: 'Office Papers', rate: '12-14', unit: 'kg', icon: '📄' },
        { name: 'Books/Magazines', rate: '10-12', unit: 'kg', icon: '📚' },
      ]
    },
    {
      category: 'Plastic',
      items: [
        { name: 'PET Bottles', rate: '15-18', unit: 'kg', icon: '🍼' },
        { name: 'Hard Plastic', rate: '12-15', unit: 'kg', icon: '🔲' },
        { name: 'Soft Plastic', rate: '5-8', unit: 'kg', icon: '🛍️' },
        { name: 'Plastic Containers', rate: '10-12', unit: 'kg', icon: '📦' },
      ]
    },
    {
      category: 'Metal',
      items: [
        { name: 'Iron/Steel', rate: '28-32', unit: 'kg', icon: '🔩' },
        { name: 'Aluminum', rate: '110-120', unit: 'kg', icon: '🥫' },
        { name: 'Copper', rate: '450-480', unit: 'kg', icon: '🔶' },
        { name: 'Brass', rate: '320-340', unit: 'kg', icon: '🔔' },
      ]
    },
    {
      category: 'E-Waste',
      items: [
        { name: 'Mobile Phones', rate: '200-500', unit: 'piece', icon: '📱' },
        { name: 'Laptops', rate: '500-2000', unit: 'piece', icon: '💻' },
        { name: 'Batteries', rate: '80-100', unit: 'kg', icon: '🔋' },
        { name: 'Wires & Cables', rate: '50-70', unit: 'kg', icon: '🔌' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-10 lg:py-14 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-full mb-3">
            <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span className="text-xs font-semibold">Live Market Rates</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Today's <span className="text-gradient">Scrap Rates</span>
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-xl mx-auto mb-2">
            Transparent pricing updated daily. Get the best market rates.
          </p>
          
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
            <span>Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
        </motion.div>

        {/* Rates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6"
        >
          {scrapRates.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-3 lg:p-4 border border-gray-100"
            >
              <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-2 pb-2 border-b border-gray-100">
                {category.category}
              </h3>
              
              <div className="space-y-1.5">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-1.5 lg:p-2 rounded-md hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 flex-1">
                      <span className="text-base lg:text-lg">{item.icon}</span>
                      <span className="text-[10px] lg:text-xs font-medium text-gray-700 truncate">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs lg:text-sm font-bold text-green-600">
                        ₹{item.rate}
                      </p>
                      <p className="text-[8px] lg:text-[10px] text-gray-500">/{item.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 lg:p-4 border border-blue-100 max-w-3xl mx-auto"
        >
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-xs lg:text-sm mb-1">Important Information</h4>
              <p className="text-[10px] lg:text-xs text-gray-600">
                Rates are indicative and may vary based on quality & market conditions. Final pricing confirmed at pickup.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveRatesSection;
