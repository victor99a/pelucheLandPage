import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft | null => {
    // Target: Jan 29, 2026, 20:00:00
    const targetDate = new Date('2026-01-29T20:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  if (!timeLeft) {
    return (
      <div className="text-center animate-pulse">
        <h2 className="text-4xl md:text-6xl font-gothic text-mcr-blood mb-4">
          ¡Hoy es el día!
        </h2>
        <p className="text-xl font-typewriter text-mcr-bone">
          The Black Parade is here.
        </p>
      </div>
    );
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-6 group">
      <div className="relative">
        {/* Background splatter effect */}
        <div className="absolute inset-0 bg-mcr-blood opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full"></div>
        
        <div className="relative z-10 w-20 h-24 md:w-32 md:h-40 bg-mcr-dark border-2 border-mcr-dust/30 flex items-center justify-center rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300">
          <span className="font-numbers text-4xl md:text-7xl text-mcr-bone font-bold tracking-tighter">
            {value.toString().padStart(2, '0')}
          </span>
          {/* Scratch effect overlay */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] pointer-events-none"></div>
        </div>
      </div>
      <span className="mt-4 font-typewriter text-sm md:text-lg text-mcr-dust tracking-widest uppercase border-b border-mcr-blood/50 pb-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center z-10 w-full max-w-5xl px-4">
      <div className="mb-12 text-center transform -rotate-1">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-typewriter text-mcr-bone tracking-widest bg-mcr-black/60 px-6 py-2 border-l-4 border-mcr-blood inline-block shadow-[5px_5px_0px_rgba(153,27,27,0.4)]">
          Peluche faltan:
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-y-8">
        <TimeUnit value={timeLeft.days} label="Días" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};