import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun } from 'lucide-react';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Show smooth celestial entrance animation on page start
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1900);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      onClick={() => setLoading(false)}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBF7F0] transition-all duration-700 select-none ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none scale-102'
      }`}
      aria-label="Loading Mukta Bhatnagar Tarot & Wellness"
    >
      {/* Background Soft Aura Glows */}
      <div className="absolute w-72 h-72 rounded-full bg-[#E8912D]/10 blur-3xl animate-pulse" />
      <div className="absolute w-80 h-80 rounded-full bg-[#B9A6D6]/15 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Animated Sacred Mandala / Celestial Symbol */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          
          {/* Rotating outer dotted ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C9A45C]/50 animate-[spin_12s_linear_infinite]" />
          
          {/* Pulsing inner ring */}
          <div className="absolute inset-2 rounded-full border border-[#E8912D]/40 animate-ping opacity-30" />
          
          {/* Center glowing badge */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#3E2F3A] to-[#5A4555] text-[#FBF7F0] shadow-xl shadow-[#3E2F3A]/20 flex items-center justify-center relative">
            <Sparkles className="w-6 h-6 text-[#E8912D] animate-pulse" />
            <div className="absolute -top-1 -right-1">
              <Sun className="w-3.5 h-3.5 text-[#C9A45C]" />
            </div>
            <div className="absolute -bottom-1 -left-1">
              <Moon className="w-3.5 h-3.5 text-[#B9A6D6]" />
            </div>
          </div>
        </div>

        {/* Script Name */}
        <h1 className="text-3xl sm:text-4xl font-script tracking-wide text-[#3E2F3A] mb-2 animate-in fade-in duration-500">
          Mukta Bhatnagar
        </h1>

        {/* Tagline */}
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A45C] mb-6">
          Tarot Reader · Cellular Health Coach
        </p>

        {/* Delicate Golden Progress Bar */}
        <div className="w-48 h-1 bg-[#3E2F3A]/10 rounded-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#C9A45C] via-[#E8912D] to-[#B9A6D6] w-full animate-[progress_1.2s_ease-in-out]" />
        </div>

        <span className="text-[11px] text-[#3E2F3A]/60 italic mt-3 font-serif">
          Seek Clarity, Find Answers
        </span>

      </div>
    </div>
  );
};
