import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, X } from 'lucide-react';

const TodaysRateBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');

  // Calculate time until midnight
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${hours}h ${minutes}m`);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const todayDate = new Date().toLocaleDateString('en-IN', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-600 text-white py-2 px-4 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      
      <div className="container mx-auto flex items-center justify-center gap-4 text-sm relative z-10">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 animate-bounce" />
          <span className="font-bold">Today's Special Rates</span>
          <span className="hidden sm:inline">({todayDate})</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <span className="bg-white/20 px-2 py-0.5 rounded">Copper: ₹480/kg</span>
          <span className="bg-white/20 px-2 py-0.5 rounded">Aluminium: ₹120/kg</span>
          <span className="bg-white/20 px-2 py-0.5 rounded">Iron: ₹32/kg</span>
        </div>

        <div className="flex items-center gap-1 bg-red-500 px-2 py-0.5 rounded animate-pulse">
          <Clock className="w-3 h-3" />
          <span className="text-xs font-bold">Expires in {timeLeft}</span>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 p-1 rounded"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default TodaysRateBanner;
