'use client';

import React from 'react';

const Sparkle = ({ size = 55, className = "" }: { size?: number; className?: string }) => {
  return (
    <div 
      className={`inline-block ${className}`} 
      style={{ width: size, height: size }}
    >
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 75 75"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        aria-hidden="true"
      >
        <g>
          <path
            fill="#E1DD00"
            d="M26.293 29.697C36.207 22.76 37.5 0 37.5 0s1.428 20.81 9.914 28.613S75 37.283 75 37.283s-20.043 2.219-27.802 9.104C39.44 53.273 37.5 75 37.5 75s-2.155-23.41-10.56-29.696S0 37.5 0 37.5s16.38-.867 26.293-7.803"
          />
        </g>
      </svg>
    </div>
  );
};

export default Sparkle;