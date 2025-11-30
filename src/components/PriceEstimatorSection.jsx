import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, IndianRupee, Scale, ArrowRight, Phone } from 'lucide-react';

const PriceEstimatorSection = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const scrapItems = [
    { id: 'newspaper', name: 'Newspaper', rate: 15, unit: 'kg', icon: '📰', category: 'Paper' },
    { id: 'cardboard', name: 'Cardboard', rate: 11, unit: 'kg', icon: '📦', category: 'Paper' },
    { id: 'iron', name: 'Iron/Steel', rate: 30, unit: 'kg', icon: '🔩', category: 'Metal' },
    { id: 'aluminium', name: 'Aluminium', rate: 115, unit: 'kg', icon: '🥫', category: 'Metal' },
    { id: 'copper', name: 'Copper', rate: 465, unit: 'kg', icon: '🔶', category: 'Metal' },
    { id: 'brass', name: 'Brass', rate: 330, unit: 'kg', icon: '🔔', category: 'Metal' },
    { id: 'plastic', name: 'Plastic (Hard)', rate: 12, unit: 'kg', icon: '🔲', category: 'Plastic' },
    { id: 'pet', name: 'PET Bottles', rate: 16, unit: 'kg', icon: '🍼', category: 'Plastic' },
    { id: 'ewaste', name: 'E-Waste', rate: 50, unit: 'kg', icon: '💻', category: 'E-Waste' },
    { id: 'ac', name: 'Old AC', rate: 4000, unit: 'piece', icon: '❄️', category: 'Appliances' },
    { id: 'fridge', name: 'Refrigerator', rate: 1500, unit: 'piece', icon: '🧊', category: 'Appliances' },
    { id: 'washing', name: 'Washing Machine', rate: 1000, unit: 'piece', icon: '🫧', category: 'Appliances' },
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
                        <div className="flex items-center gap-1">
                          <IndianRupee className="w-3 h-3 text-green-600" />
                          <span className="text-sm font-bold text-green-600">{item.rate}</span>
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
                      <p className="text-xs text-green-200">*Final price may vary after quality inspection</p>
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
        </div>
      </div>
    </section>
  );
};

export default PriceEstimatorSection;
