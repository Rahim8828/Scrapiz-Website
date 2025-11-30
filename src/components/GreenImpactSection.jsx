import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, TreePine, Droplets, Wind, Calculator, TrendingUp } from 'lucide-react';

const GreenImpactSection = () => {
  const [scrapWeight, setScrapWeight] = useState(10);

  // Environmental impact calculations per kg
  const calculateImpact = (weight) => {
    return {
      carbonSaved: (weight * 2.5).toFixed(1), // kg CO2
      waterSaved: (weight * 15).toFixed(0), // liters
      energySaved: (weight * 8).toFixed(0), // kWh
      treesEquivalent: (weight * 0.05).toFixed(2) // trees
    };
  };

  const impact = calculateImpact(scrapWeight);

  const totalImpact = [
    { 
      icon: Wind, 
      label: 'Carbon Reduced', 
      value: '25,000', 
      unit: 'kg CO₂',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    { 
      icon: TreePine, 
      label: 'Trees Saved', 
      value: '1,250', 
      unit: 'Equivalent',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    { 
      icon: Droplets, 
      label: 'Water Conserved', 
      value: '1,50,000', 
      unit: 'Liters',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    { 
      icon: TrendingUp, 
      label: 'Energy Saved', 
      value: '80,000', 
      unit: 'kWh',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    }
  ];

  const benefits = [
    {
      icon: '🌍',
      title: 'Combat Climate Change',
      description: 'Reduce greenhouse gas emissions by recycling instead of landfilling'
    },
    {
      icon: '♻️',
      title: 'Circular Economy',
      description: 'Give materials a second life and reduce virgin resource extraction'
    },
    {
      icon: '🌱',
      title: 'Cleaner Future',
      description: 'Prevent soil and water pollution from improper waste disposal'
    },
    {
      icon: '💚',
      title: 'Community Impact',
      description: 'Support local recycling ecosystem and create green jobs'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Leaf className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Environmental Impact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our <span className="text-gradient">Green Impact</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Every kilogram of scrap you recycle contributes to a sustainable future.
          </p>
        </motion.div>

        {/* Total Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10">
          {totalImpact.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-hidden rounded-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5`}></div>
              <div className={`${item.bgColor} p-5 lg:p-6 text-center relative`}>
                <item.icon className={`w-10 h-10 ${item.iconColor} mx-auto mb-3`} strokeWidth={2} />
                <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{item.value}</p>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">{item.unit}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 mb-10 max-w-4xl mx-auto border border-green-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-xl">
              <Calculator className="w-6 h-6 text-green-600" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900">Calculate Your Impact</h3>
              <p className="text-sm text-gray-600">See how much you contribute to the environment</p>
            </div>
          </div>

          {/* Slider */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold text-gray-700">Scrap Weight</label>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold">
                {scrapWeight} kg
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={scrapWeight}
              onChange={(e) => setScrapWeight(Number(e.target.value))}
              className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>

          {/* Impact Results */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <Wind className="w-8 h-8 text-green-600 mx-auto mb-2" strokeWidth={2} />
              <p className="text-xl lg:text-2xl font-bold text-green-900">{impact.carbonSaved}</p>
              <p className="text-xs text-green-700 font-medium">kg CO₂ Saved</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" strokeWidth={2} />
              <p className="text-xl lg:text-2xl font-bold text-green-900">{impact.treesEquivalent}</p>
              <p className="text-xs text-green-700 font-medium">Trees Equivalent</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <Droplets className="w-8 h-8 text-green-600 mx-auto mb-2" strokeWidth={2} />
              <p className="text-xl lg:text-2xl font-bold text-green-900">{impact.waterSaved}</p>
              <p className="text-xs text-green-700 font-medium">Liters Saved</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" strokeWidth={2} />
              <p className="text-xl lg:text-2xl font-bold text-green-900">{impact.energySaved}</p>
              <p className="text-xs text-green-700 font-medium">kWh Saved</p>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            * Environmental impact calculations based on industry averages for mixed recyclables
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-center text-white shadow-xl"
        >
          <Leaf className="w-16 h-16 mx-auto mb-4 opacity-90" strokeWidth={1.5} />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Start Your Green Journey Today
          </h3>
          <p className="text-base lg:text-lg text-green-50 mb-6 max-w-2xl mx-auto">
            Every small action counts. Schedule a pickup now and be part of the solution for a cleaner, greener Mumbai.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Schedule Pickup Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GreenImpactSection;
