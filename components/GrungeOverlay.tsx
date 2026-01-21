import React from 'react';

export const GrungeOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Vignette */}
      <div className="absolute inset-0 bg-grunge-gradient opacity-90 mix-blend-multiply"></div>
      
      {/* Noise Texture Simulation (CSS only) */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Border Effect */}
      <div className="absolute inset-0 border-[1px] border-mcr-blood/20 m-2 pointer-events-none rounded-lg"></div>
      <div className="absolute inset-0 border-[1px] border-mcr-black m-3 pointer-events-none rounded-lg"></div>
    </div>
  );
};