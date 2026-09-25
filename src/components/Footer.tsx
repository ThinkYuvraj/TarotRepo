import React from 'react';
import { PROFILE_INFO } from '../data/content';
import horizontalLogo from '../assets/images/mukta_shine_horizontal_logo.png';
import { ShieldCheck, Cookie } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 88;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  const openCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent('open_cookie_settings'));
  };

  return (
    <footer className="bg-[#FBF7F0] border-t border-[#3E2F3A]/10 py-10 text-xs sm:text-sm text-[#3E2F3A]/70">
      <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#3E2F3A]/8">
          {/* Brand Logo & Tagline */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src={horizontalLogo} 
              alt="Mukta Shine – Cellular & Tarot Coach" 
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>

          {/* Quick Nav Mirror with smooth header-offset scroll */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#3E2F3A]/80 font-medium">
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, '#about')}
              className="hover:text-[#E8912D] transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, '#services')}
              className="hover:text-[#E8912D] transition-colors"
            >
              Tarot
            </a>
            <a 
              href="#wellness" 
              onClick={(e) => scrollToSection(e, '#wellness')}
              className="hover:text-[#E8912D] transition-colors"
            >
              Wellness
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => scrollToSection(e, '#pricing')}
              className="hover:text-[#E8912D] transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => scrollToSection(e, '#reviews')}
              className="hover:text-[#E8912D] transition-colors"
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hover:text-[#E8912D] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Privacy, Cookie Settings & Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3E2F3A]/60">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span>© {new Date().getFullYear()} Mukta Bhatnagar. All rights reserved.</span>
            <span>·</span>
            <button
              onClick={openCookiePreferences}
              className="inline-flex items-center gap-1 hover:text-[#E8912D] underline underline-offset-4 cursor-pointer transition-colors"
            >
              <Cookie className="w-3.5 h-3.5" />
              <span>Cookie Settings</span>
            </button>
          </div>
          
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Client confidentiality & explicit user consent respected</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
