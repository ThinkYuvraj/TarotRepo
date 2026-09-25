import React from 'react';
import { PROFILE_INFO } from '../data/content';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import muktaMainPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24 min-h-[calc(100vh-5rem)]">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Grid / Flex: On mobile photo is prioritized, on tablet & desktop balanced side-by-side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-8 lg:gap-14">
          
          {/* Portrait container: Mobile-first (Order 1 on mobile, Order 2 on tablet/desktop) */}
          <div className="order-1 md:order-2 w-full max-w-[300px] xs:max-w-[320px] sm:max-w-[350px] md:max-w-[340px] lg:max-w-[400px] flex justify-center shrink-0">
            <div className="relative w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[320px] md:max-w-[320px] lg:max-w-[370px] aspect-[4/5] mx-auto">
              
              {/* Lavender background arch accent shadow */}
              <div 
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 rounded-t-[130px] sm:rounded-t-[180px] rounded-b-2xl bg-[#B9A6D6]/40 transition-transform" 
                aria-hidden="true"
              />

              {/* Main Photo container with curved arch top */}
              <div className="relative w-full h-full rounded-t-[130px] sm:rounded-t-[180px] rounded-b-2xl overflow-hidden border-2 border-white shadow-xl shadow-[#3E2F3A]/10 bg-white">
                <img
                  src={muktaMainPhoto}
                  alt="Mukta Bhatnagar - Tarot Reader and Cellular Health Coach"
                  className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle soft gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F3A]/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Badge: 6+ years · Delhi & online */}
              <div className="absolute bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-sm border border-[#C9A45C]/35 shadow-md shadow-[#3E2F3A]/10 px-3 sm:px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#3E2F3A]">
                <span className="font-bold text-[#E8912D]">6+ years</span>
                <span className="text-[#C9A45C]">·</span>
                <span className="text-[#3E2F3A]/85">Delhi & online</span>
              </div>
            </div>
          </div>

          {/* Text Content Block */}
          <div className="order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
            
            {/* Top Kicker Label */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C] mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E8912D]" />
              <span>Tarot Reader · Cellular Health Coach</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3.5xl xs:text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#3E2F3A] leading-[1.12] tracking-tight mb-3.5 sm:mb-4 text-balance">
              Seek Clarity, <br />
              <span className="font-serif italic text-[#E8912D]">Find Answers.</span>
            </h1>

            {/* 1-2 lines subtext */}
            <p className="text-sm xs:text-base sm:text-lg text-[#3E2F3A]/90 font-normal leading-relaxed mb-6 sm:mb-8 max-w-md">
              Helping you balance a healthy Mind, Body & Soul with practical guidance and effective remedies.
            </p>

            {/* CTA Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              
              {/* WhatsApp Button */}
              <a
                href={PROFILE_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95 transition-all text-sm font-semibold shadow-md shadow-[#25D366]/25 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Call Button */}
              <a
                href={`tel:${PROFILE_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#E8912D] text-[#E8912D] hover:bg-[#E8912D]/10 active:scale-95 transition-all text-sm font-medium whitespace-nowrap"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call {PROFILE_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Quick trust snippet */}
            <p className="text-xs text-[#3E2F3A]/75 font-medium mt-3 sm:mt-4">
              In-person at GTB Enclave, Delhi or over phone / WhatsApp call.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
