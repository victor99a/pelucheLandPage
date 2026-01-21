import React from 'react';

export const MusicPlayer: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto mt-20 md:mt-32 px-6 pb-20 relative z-10">
      <div className="flex items-center justify-center mb-10">
        <div className="h-[1px] w-12 bg-mcr-blood"></div>
        <h3 className="font-gothic text-3xl md:text-4xl text-mcr-bone mx-4 text-center tracking-wide animate-flicker">
          Soundtrack para la espera
        </h3>
        <div className="h-[1px] w-12 bg-mcr-blood"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Track 1: Welcome to the Black Parade - Autoplay Enabled */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-mcr-blood to-mcr-black rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-mcr-black rounded-xl ring-1 ring-white/10 shadow-2xl">
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/track/5wQnmLuC1W7ATsArWACrgW?utm_source=generator&theme=0&autoplay=1" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Welcome to the Black Parade"
            ></iframe>
          </div>
        </div>

        {/* Track 2: Helena */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-mcr-black to-mcr-blood rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-mcr-black rounded-xl ring-1 ring-white/10 shadow-2xl">
            <iframe 
              style={{ borderRadius: '12px' }} 
              src="https://open.spotify.com/embed/track/5dTHtzHFPyi8TlTtpz8NW4?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="Helena"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-mcr-dust font-typewriter text-xs opacity-60">
          *VOLUME UP FOR MAXIMUM EMOTIONAL DAMAGE*
        </p>
      </div>
    </section>
  );
};