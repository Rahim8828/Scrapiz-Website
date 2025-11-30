import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const ScrapCategoriesSection = () => {
  const categories = [
    {
      name: 'Aluminium',
      icon: '🥫',
      rate: '₹110-120/kg',
      path: '/sell-aluminium-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Copper',
      icon: '🔶',
      rate: '₹450-480/kg',
      path: '/sell-copper-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Brass',
      icon: '🔔',
      rate: '₹320-340/kg',
      path: '/sell-brass-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Iron & Steel',
      icon: '🔩',
      rate: '₹28-32/kg',
      path: '/sell-iron-steel-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Stainless Steel',
      icon: '🍴',
      rate: '₹50-60/kg',
      path: '/sell-stainless-steel-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'E-Waste',
      icon: '💻',
      rate: '₹50-500/pc',
      path: '/sell-e-waste-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'AC Scrap',
      icon: '❄️',
      rate: '₹2000-8000/pc',
      path: '/sell-ac-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Refrigerator',
      icon: '🧊',
      rate: '₹800-2500/pc',
      path: '/sell-refrigerator-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Washing Machine',
      icon: '🫧',
      rate: '₹500-1500/pc',
      path: '/sell-washing-machine-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Microwave',
      icon: '📻',
      rate: '₹200-500/pc',
      path: '/sell-microwave-scrap-mumbai',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">What We Buy</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Sell Any Type of <span className="text-gradient">Scrap</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            We buy all types of scrap at best market rates. Click on any category to know more.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <Link
                to={category.path}
                className={`block ${category.bgColor} rounded-xl p-4 lg:p-5 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full`}
              >
                <div className="text-3xl lg:text-4xl mb-3">{category.icon}</div>
                <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors leading-tight">
                  {category.name}
                </h3>
                <div className={`inline-block bg-gradient-to-r ${category.color} text-white text-xs lg:text-sm font-bold px-3 py-1 rounded-full`}>
                  {category.rate}
                </div>
                <div className="mt-3 flex items-center justify-center text-green-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Sell Now</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          * Rates are indicative and may vary based on quality and market conditions
        </motion.p>
      </div>
    </section>
  );
};

export default ScrapCategoriesSection;
