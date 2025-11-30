import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center" title="Scrapiz - Sell Scrap Online">
      {/* Icon with Gradient */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <defs>
          <linearGradient id="logoIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#009900" />
            <stop offset="100%" stopColor="#27ae60" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#logoIconGradient)" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fill="white"
          fontSize="30"
          fontFamily="'Poppins', sans-serif"
          fontWeight="600"
        >
          S
        </text>
      </svg>
      {/* Text with matching color */}
      <span 
        className="text-2xl font-bold"
        style={{ color: '#009900' }} // Matching green from the palette
      >
        Scrapiz
      </span>
    </div>
  );
};

export default Logo;
