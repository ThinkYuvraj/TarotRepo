import React from 'react';
import { PROFILE_INFO } from '../data/content';
import { MessageCircle, Phone, Sparkles, Moon, Sun, Star } from 'lucide-react';
import muktaMainPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24 2xl:py-28 min-h-[calc(100vh-5rem)]">
      
      {/* Background Decorative Animated Celestial Glow Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] lg:w-[1000px] xl:w-[1200px] h-[600px] sm:h-[800px] lg:h-[1000px] xl:h-[1200px] pointer-events-none -z-10 opacity-35">
        <div className="w-full h-full rounded-full border border-[#C9A45C]/20 animate-celestial-spin" />
        <div className="absolute inset-8 rounded-full border border-dashed border-[#B9A6D6]/30" />
        <div className="absolute inset-24 rounded-full bg-gradient-to-tr from-[#B9A6D6]/15 via-[#F7EDE6]/20 to-[#E8912D]/10 blur-3xl animate-pulse-glow" />
      </div>

      {/* Twinkling Celestial Star Accents */}
      <div className="absolute top-12 left-[10%] text-[#C9A45C]/60 pointer-events-none hidden sm:block animate-twinkle">
        <Star className="w-4 h-4 fill-[#C9A45C]/40" />
      </div>
      <div className="absolute top-28 right-[12%] text-[#E8912D]/60 pointer-events-none hidden sm:block animate-twinkle-delayed">
        <Moon className="w-5 h-5 fill-[#E8912D]/20" />
      </div>
      <div className="absolute bottom-16 left-[15%] text-[#8FAF8A]/60 pointer-events-none hidden md:block animate-twinkle">
        <Sun className="w-5 h-5" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        
        {/* Responsive Grid / Flex: On mobile photo is prioritized, on tablet & desktop balanced side-by-side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-10 lg:gap-16 xl:gap-20">
          
          {/* Portrait container: Mobile-first (Order 1 on mobile, Order 2 on tablet/desktop) */}
          <div className="order-1 md:order-2 w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[350px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[460px] 2xl:max-w-[500px] flex justify-center shrink-0">
            <div className="relative w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[400px] xl:max-w-[440px] 2xl:max-w-[480px] aspect-[4/5] mx-auto">
              
              {/* Main Photo container with clean curved arch top */}
              <div className="relative w-full h-full rounded-t-[130px] sm:rounded-t-[180px] xl:rounded-t-[220px] rounded-b-2xl overflow-hidden border-2 border-white shadow-xl shadow-[#3E2F3A]/10 bg-white group">
                <img
                  src={muktaMainPhoto}
                  alt="Mukta Bhatnagar - Tarot Reader and Cellular Health Coach"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle soft gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F3A]/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Badge: 6+ years · Delhi & online */}
              <div className="absolute bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md border border-[#C9A45C]/40 shadow-md shadow-[#3E2F3A]/10 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#3E2F3A] transition-transform">
                <span className="font-bold text-[#E8912D]">6+ years</span>
                <span className="text-[#C9A45C]">·</span>
                <span className="text-[#3E2F3A]/85">Delhi & online</span>
              </div>
            </div>
          </div>

          {/* Text Content Block */}
          <div className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start max-w-xl lg:max-w-2xl xl:max-w-3xl">
            
            {/* Top Kicker Label with animated sparkle */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#C9A45C]/30 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C] mb-3 sm:mb-5 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#E8912D] animate-twinkle" />
              <span>Tarot Reader · Cellular Health Coach</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3.5xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-[#3E2F3A] leading-[1.12] tracking-tight mb-4 sm:mb-5 text-balance">
              Seek Clarity, <br />
              <span className="font-serif italic text-[#E8912D] underline decoration-[#C9A45C]/40 underline-offset-8">Find Answers.</span>
            </h1>

            {/* 1-2 lines subtext */}
            <p className="text-sm xs:text-base sm:text-lg xl:text-xl text-[#3E2F3A]/90 font-normal leading-relaxed mb-6 sm:mb-9 max-w-md lg:max-w-lg xl:max-w-xl">
              Helping you balance a healthy Mind, Body & Soul with practical guidance and effective remedies.
            </p>

            {/* CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              
              {/* WhatsApp Button */}
              <a
                href={PROFILE_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95 hover:shadow-lg hover:shadow-[#25D366]/30 transition-all text-sm sm:text-base font-semibold shadow-md shadow-[#25D366]/25 whitespace-nowrap overflow-hidden"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${PROFILE_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border-2 border-[#E8912D] text-[#E8912D] hover:bg-[#E8912D] hover:text-white active:scale-95 transition-all text-sm sm:text-base font-semibold whitespace-nowrap shadow-xs"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call {PROFILE_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Quick trust snippet */}
            <p className="text-xs sm:text-sm text-[#3E2F3A]/75 font-medium mt-3.5 sm:mt-5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>In-person at GTB Enclave, Delhi or over phone / WhatsApp call.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
