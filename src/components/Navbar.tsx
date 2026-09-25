import React, { useState, useEffect } from 'react';
import { PROFILE_INFO } from '../data/content';
import horizontalLogo from '../assets/images/mukta_shine_horizontal_logo.png';
import { 
  MessageCircle, 
  Menu, 
  X, 
  Phone, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Compass,
  HeartPulse,
  Tag,
  Star,
  MapPin,
  Clock
} from 'lucide-react';

interface NavbarProps {
  onOpenPayment?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPayment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile overlay on resize to desktop/tablet >= 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile overlay is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { 
      href: '#about', 
      label: 'About Mukta Ji', 
      detail: 'Cancer survivor story & 6+ yrs wisdom',
      icon: <BookOpen className="w-4 h-4 text-[#C9A45C]" />
    },
    { 
      href: '#services', 
      label: 'Tarot Guidance', 
      detail: 'Clarity for love, career & abundance',
      icon: <Compass className="w-4 h-4 text-[#876EB2]" />
    },
    { 
      href: '#wellness', 
      label: 'Cellular Wellness', 
      detail: 'Holistic health & nutrition coaching',
      icon: <HeartPulse className="w-4 h-4 text-[#5B8556]" />
    },
    { 
      href: '#pricing', 
      label: 'Tarot Packages', 
      detail: '₹1,100 · ₹2,100 · ₹5,100',
      icon: <Tag className="w-4 h-4 text-[#E8912D]" />
    },
    { 
      href: '#reviews', 
      label: 'Client Reviews', 
      detail: 'Verified feedback & testimonials',
      icon: <Star className="w-4 h-4 text-[#E8912D]" />
    },
    { 
      href: '#contact', 
      label: 'Visit or Connect', 
      detail: 'GTB Enclave, Delhi & Phone Call',
      icon: <MapPin className="w-4 h-4 text-[#C9A45C]" />
    },
  ];

  // Precise scrolling: Offset by header height (88px) so headings are never obscured
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  return (
    <>
      {/* Sticky Main Header */}
      <header className="sticky top-0 z-40 bg-[#FBF7F0]/95 backdrop-blur-md border-b border-[#3E2F3A]/10 shadow-xs transition-all">
        <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 h-16 sm:h-20 flex items-center justify-between gap-3">
          
          {/* Mukta Shine Horizontal Transparent Logo on Cream Header */}
          <div className="shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', ' ');
              }}
              className="flex items-center hover:opacity-90 active:scale-98 transition-all select-none py-1 cursor-pointer"
              aria-label="Mukta Shine – Cellular & Tarot Coach"
            >
              <img 
                src={horizontalLogo} 
                alt="Mukta Shine – Cellular & Tarot Coach" 
                className="h-11 sm:h-13 md:h-14 w-auto object-contain"
              />
            </a>
          </div>

          {/* Tablet & Desktop Navigation Links:
              Gracefully expands on tablet (md:) and desktop (lg:) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-5 text-xs lg:text-sm font-medium text-[#3E2F3A]/85">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-2.5 py-1.5 rounded-full hover:bg-white/80 hover:text-[#E8912D] active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* WhatsApp Direct Action Button */}
            <a
              href={PROFILE_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] active:scale-95 transition-all text-xs sm:text-sm font-semibold shadow-sm shadow-[#25D366]/20 whitespace-nowrap"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Quick Call Icon (Tablet & Desktop >= 768px) */}
            <a
              href={`tel:${PROFILE_INFO.phone}`}
              className="hidden sm:inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#E8912D]/40 text-[#E8912D] hover:bg-[#E8912D]/10 hover:border-[#E8912D] active:scale-95 transition-all"
              aria-label={`Call ${PROFILE_INFO.phoneFormatted}`}
              title={`Call ${PROFILE_INFO.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* Mobile Hamburger Icon (Small screens < 768px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 text-[#3E2F3A] border border-[#3E2F3A]/15 hover:bg-[#3E2F3A]/5 active:scale-95 transition-all"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 text-[#3E2F3A]" />
            </button>
          </div>

        </div>
      </header>

      {/* LUXURIOUS FULL-SCREEN MOBILE OVERLAY
          Renders as a dedicated overlay over the main screen, NOT pushing page content! */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50 bg-[#FBF7F0]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar of Overlay */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-[#3E2F3A]/10 bg-[#FBF7F0]/90 sticky top-0 z-10">
            <img 
              src={horizontalLogo} 
              alt="Mukta Shine – Cellular & Tarot Coach" 
              className="h-9 w-auto object-contain"
            />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white border border-[#3E2F3A]/15 flex items-center justify-center text-[#3E2F3A] hover:bg-neutral-100 active:scale-90 transition-all shadow-xs"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overlay Navigation Content */}
          <div className="px-5 py-6 space-y-5 flex-1">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#3E2F3A]/8 text-xs">
              <span className="font-semibold uppercase tracking-wider text-[#C9A45C] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E8912D]" />
                Explore Sections
              </span>
              <span className="text-[#3E2F3A]/60">Delhi & Online</span>
            </div>

            {/* Menu Links with Rich Styling and Touch Targets */}
            <div className="grid grid-cols-1 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#3E2F3A]/8 hover:border-[#E8912D]/40 active:bg-[#F7EDE6]/50 transition-all shadow-xs cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FBF7F0] flex items-center justify-center border border-[#3E2F3A]/10 shrink-0">
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#3E2F3A]">
                        {link.label}
                      </div>
                      <div className="text-[11px] text-[#3E2F3A]/70">
                        {link.detail}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
                </a>
              ))}
            </div>

          </div>

          {/* Bottom Action Area in Overlay */}
          <div className="p-5 border-t border-[#3E2F3A]/10 bg-white/60 space-y-3">
            <a
              href={PROFILE_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] text-white font-semibold text-sm shadow-md shadow-[#25D366]/20 active:scale-98 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0" />
              <span>Direct WhatsApp Chat</span>
            </a>

            <a
              href={`tel:${PROFILE_INFO.phone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#E8912D] text-[#E8912D] font-medium text-sm hover:bg-[#E8912D]/10 active:scale-98 transition-all"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Call {PROFILE_INFO.phoneFormatted}</span>
            </a>

            <div className="text-center text-[11px] text-[#3E2F3A]/70 pt-1 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>Tarot (8:30 – 10:30 PM) · Wellness (11:30 AM – 5:30 PM)</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
