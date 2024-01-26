import React from 'react';

const SwitchHorizontal = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
      <defs>
        <linearGradient id="gradiente" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#690F8D" />
          <stop offset="100%" stopColor="#190EAF" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path 
        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" 
        strokeWidth={1.5} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        stroke="url(#gradiente)"
      />
    </svg>
  );
};

export default SwitchHorizontal;
