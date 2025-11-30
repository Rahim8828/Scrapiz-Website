import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee, Scale, ArrowRight, Phone } from 'lucide-react';

const PriceEstimatorSection = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const scrapItems = [
    { id: 'newspaper', name: 'Newspaper', minRate: 12, maxRate: 18, rate: 15, unit: 'kg', icon: '📰', category: 'Paper' },
    { id: 'cardboard', name: 'Cardboard', minRate: 8, maxRate: 14, rate: 11, unit: 'kg', icon: '📦', category: 'Paper' },
    { id: 'iron', name: 'Iron/Steel', minRate: 25, maxRate: 40, rate: 32, unit: 'kg', icon: '🔩', category: 'Metal' },
    { id: 'aluminium', name: 'Aluminium', minRate: 90, maxRate: 140, rate: 115, unit: 'kg', icon: '🥫', category: 'Metal' },
    { id: 'copper', name: 'Copper', minRate: 400, maxRate: 550, rate: 475, unit: 'kg', icon: '🔶', category: 'Metal' },
    { id: 'brass', name: 'Brass', minRate: 280, maxRate: 380, rate: 330, unit: 'kg', icon: '🔔', category: 'Metal' },
    { id: 'plastic', name: 'Plastic (Hard)', minRate: 8, maxRate: 16, rate: 12, unit: 'kg', icon: '🔲', category: 'Plastic' },
    { id: 'pet', name: 'PET Bottles', minRate: 12, maxRate: 20, rate: 16, unit: 'kg', icon: '🍼', category: 'Plastic' },
    { id: 'ewaste', name: 'E-Waste', minRate: 30, maxRate: 80, rate: 55, unit: 'kg', icon: '💻', category: 'E-Waste' },
    { id: 'ac', name: 'Old AC', minRate: 2500, maxRate: 6000, rate: 4000, unit: 'piece', icon: '❄️', category: 'Appliances' },
    { id: 'fridge', name: 'Refrigerator', minRate: 800, maxRate: 2500, rate: 1500, unit: 'piece', icon: '🧊', category: 'Appliances' },
    { id: 'washing', name: 'Washing Machine', minRate: 600, maxRate: 1800, rate: 1000, unit: 'piece', icon: '🫧', category: 'Appliances' },
  ];

  const handleQuantityChange = (id, value) => {
    const numValue = parseFloat(value) || 0;
    setSelectedItems(prev => ({
      ...prev,
      [id]: numValue
    }));
  };

  const totalEstimate = useMemo(() => {
    return Object.entries(selectedItems).reduce((total, [id, quantity]) => {
      const item = scrapItems.find(i => i.id === id);
      return total + (item ? item.rate * quantity : 0);
    }, 0);
  }, [selectedItems]);

  const hasItems = Object.values(selectedItems).some(v => v > 0);

  const handleGetQuote = () => {
    const itemsList = Object.entries(selectedItems)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const item = scrapItems.find(i => i.id === id);
        return `${item.name}: ${qty} ${item.unit}`;
      })
      .join('\n');

    const message = `Hi! I want to sell scrap:\n\n${itemsList}\n\nEstimated Value: ₹${totalEstimate.toLocaleString()}\n\nPlease confirm pickup.`;
    window.open(`https://wa.me/918828700630?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Calculator className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Price Estimator</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Calculate Your <span className="text-gradient">Scrap Value</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Select your scrap items, enter quantities, and get an instant price estimate. 
            <span className="block text-sm text-green-600 font-medium mt-1">💡 Rates updated daily</span>
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Items Grid */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-green-600" />
                  Select Items & Quantity
                </h3>
                {hasItems && (
                  <button
                    onClick={() => setSelectedItems({})}
                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {scrapItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      selectedItems[item.id] > 0 
                        ? 'border-green-500 bg-green-50 shadow-md' 
                        : 'border-gray-200 hover:border-green-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-3xl flex-shrink-0">{item.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 mb-0.5">{item.name}</p>
                        <div className="flex items-center gap-0.5">
                          <IndianRupee className="w-3 h-3 text-green-600 flex-shrink-0" />
                          <span className="text-sm font-bold text-green-600">{item.minRate}-{item.maxRate}</span>
                          <span className="text-xs text-gray-500">/{item.unit}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        step={item.unit === 'piece' ? '1' : '0.5'}
                        placeholder={`Enter ${item.unit}`}
                        value={selectedItems[item.id] || ''}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-full px-3 py-2.5 text-sm font-medium border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                      />
                      {selectedItems[item.id] > 0 && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">
                          ₹{(item.rate * selectedItems[item.id]).toLocaleString()}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Estimate Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-600 via-green-600 to-green-700 rounded-2xl shadow-2xl p-6 text-white sticky top-24"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <IndianRupee className="w-5 h-5" />
                    Your Estimate
                  </h3>
                  {hasItems && (
                    <div className="bg-white/20 px-2 py-1 rounded-full">
                      <span className="text-xs font-bold">{Object.values(selectedItems).filter(v => v > 0).length} items</span>
                    </div>
                  )}
                </div>

                {hasItems ? (
                  <>
                    <div className="space-y-2 mb-5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                      {Object.entries(selectedItems)
                        .filter(([_, qty]) => qty > 0)
                        .map(([id, qty]) => {
                          const item = scrapItems.find(i => i.id === id);
                          return (
                            <motion.div
                              key={id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex justify-between items-center text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-lg hover:bg-white/20 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{item.icon}</span>
                                <div>
                                  <p className="font-medium">{item.name}</p>
                                  <p className="text-xs text-green-200">{qty} {item.unit}</p>
                                </div>
                              </div>
                              <span className="font-bold text-base">₹{(item.rate * qty).toLocaleString()}</span>
                            </motion.div>
                          );
                        })}
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-green-100">Estimated Total</span>
                        <motion.span
                          key={totalEstimate}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          className="text-3xl font-bold"
                        >
                          ₹{totalEstimate.toLocaleString()}
                        </motion.span>
                      </div>
                      <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-2.5 mt-3">
                        <p className="text-xs text-amber-100 font-semibold mb-1 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Tentative Estimate
                        </p>
                        <p className="text-xs text-green-100 leading-relaxed">
                          Rates vary based on market conditions, quality & quantity. Call for exact pricing.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleGetQuote}
                      className="w-full bg-white text-green-600 py-3.5 rounded-xl font-bold text-base hover:bg-green-50 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Get Exact Quote on WhatsApp
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-5xl mb-4"
                    >
                      🧮
                    </motion.div>
                    <p className="text-green-100 text-sm font-medium">Select items and enter quantities</p>
                    <p className="text-green-200 text-xs mt-2">to calculate your scrap value</p>
                  </div>
                )}

                <div className="mt-5 pt-5 border-t border-white/20">
                  <a
                    href="tel:+918828700630"
                    className="flex items-center justify-center gap-2 text-sm font-medium hover:text-green-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Need help? Call +91 8828700630
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Rate Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-lg shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-amber-800 mb-1">Important Note About Estimates</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    <strong>These are tentative estimates only.</strong> Actual prices may vary based on current market conditions, material quality, purity, quantity, and physical inspection. 
                    Rates are updated regularly but can fluctuate daily. For the most accurate pricing and to schedule a pickup, please call us at 
                    <a href="tel:+918828700630" className="font-bold text-amber-900 hover:underline ml-1">+91 8828700630</a> or get a quote on WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PriceEstimatorSection;
