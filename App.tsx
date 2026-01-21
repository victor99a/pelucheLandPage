import React from 'react';
import { Countdown } from './components/Countdown';
import { MusicPlayer } from './components/MusicPlayer';
import { GrungeOverlay } from './components/GrungeOverlay';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-mcr-black text-mcr-bone relative flex flex-col overflow-hidden selection:bg-mcr-blood selection:text-white">
      {/* Texture Overlay */}
      <GrungeOverlay />

      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-mcr-blood rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-mcr-blood rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-12 md:py-20 relative z-10 w-full">
        
        {/* Header / Band Name Tribute */}
        <header className="mb-16 md:mb-24 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-gothic text-mcr-bone tracking-wider drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            My Chemical Romance
          </h1>
          <div className="mt-4 flex items-center justify-center space-x-4">
             <span className="h-[2px] w-8 md:w-24 bg-gradient-to-r from-transparent to-mcr-blood"></span>
             <span className="font-typewriter text-mcr-blood tracking-[0.2em] text-sm md:text-lg uppercase font-bold">
               29 . Enero . 2026
             </span>
             <span className="h-[2px] w-8 md:w-24 bg-gradient-to-l from-transparent to-mcr-blood"></span>
          </div>
        </header>

        {/* The Countdown Section */}
        <Countdown />

      </main>

      {/* Footer / Music Section */}
      <footer className="relative z-20 w-full bg-gradient-to-t from-black via-mcr-black/90 to-transparent pt-12">
        <MusicPlayer />
        
        <div className="w-full text-center py-6 border-t border-mcr-dark mt-8">
           <p className="text-mcr-dust/40 font-typewriter text-xs">
             WE'LL CARRY ON.
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;