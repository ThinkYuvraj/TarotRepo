import React, { useState, useRef } from 'react';
import { PRICING_PACKAGES, PROFILE_INFO, ServicePackage } from '../data/content';
import { Sparkles, CreditCard, ChevronLeft, ChevronRight } from 'lucide-react';

interface PricingProps {
  onOpenPaymentModal: (pkg?: ServicePackage) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenPaymentModal }) => {
  const [activeMobileIdx, setActiveMobileIdx] = useState(1); // default to Most Popular (2 questions)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalPackages = PRICING_PACKAGES.length;

  const handleNext = () => {
    setActiveMobileIdx((prev) => (prev + 1) % totalPackages);
  };

  const handlePrev = () => {
    setActiveMobileIdx((prev) => (prev - 1 + totalPackages) % totalPackages);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) handleNext();
    if (diff < -40) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="pricing" className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#F7EDE6]/50 border-y border-[#3E2F3A]/5 scroll-mt-24">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A45C]">
            Tarot Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-2">
            Simple, clear pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#3E2F3A]/70 mt-2">
            Transparent remedies and intuitive insights with no hidden terms.
          </p>
        </div>

        {/* MOBILE VIEW: 3D Stack Pricing Carousel (Reduces vertical scrolling) */}
        <div className="block md:hidden mb-6">
          <div 
            className="relative h-[430px] w-full max-w-[320px] mx-auto perspective-[1000px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {PRICING_PACKAGES.map((pkg, idx) => {
              let stackPos = idx - activeMobileIdx;
              if (stackPos < 0) stackPos += totalPackages;

              const isTop = stackPos === 0;
              const isHighlighted = pkg.highlighted;
              const waBookingMessage = `Hello Mukta ji, I would like to book the "${pkg.name}" Tarot Guidance package (${pkg.price}).`;

              const translateY = stackPos * 12;
              const scale = 1 - stackPos * 0.05;
              const zIndex = 10 - stackPos;
              const opacity = 1 - stackPos * 0.2;
              const rotate = stackPos === 1 ? '1.5deg' : stackPos === 2 ? '-1.5deg' : '0deg';

              return (
                <div
                  key={pkg.id}
                  onClick={() => !isTop && setActiveMobileIdx(idx)}
                  style={{
                    transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate})`,
                    zIndex,
                    opacity,
                    willChange: 'transform, opacity',
                    transition: 'transform 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.35s ease',
                  }}
                  className={`absolute inset-0 bg-white rounded-3xl p-6 flex flex-col justify-between text-center shadow-xl cursor-pointer ${
                    isHighlighted 
                      ? 'border-2 border-[#E8912D] ring-2 ring-[#E8912D]/30' 
                      : 'border border-[#3E2F3A]/15'
                  }`}
                >
                  {isHighlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8912D] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-serif text-[#3E2F3A] mb-1">
                      {pkg.name}
                    </h3>
                    <div className="text-3xl font-serif font-bold text-[#E8912D] mb-1">
                      {pkg.price}
                    </div>
                    <p className="text-xs text-[#3E2F3A]/70 mb-4">
                      {pkg.tagline}
                    </p>

                    <ul className="text-left text-xs text-[#3E2F3A]/80 space-y-2 mb-4 pb-4 border-b border-[#3E2F3A]/10">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <span className="text-[#E8912D] text-xs">✦</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={PROFILE_INFO.whatsappUrl(waBookingMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full block py-2.5 px-4 rounded-xl text-xs font-semibold shadow-xs ${
                        isHighlighted
                          ? 'bg-[#E8912D] text-white'
                          : 'border border-[#E8912D] text-[#E8912D]'
                      }`}
                    >
                      Book on WhatsApp
                    </a>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPaymentModal(pkg);
                      }}
                      className="text-[11px] text-[#3E2F3A]/60 hover:text-[#3E2F3A] flex items-center justify-center gap-1 w-full py-1"
                    >
                      <CreditCard className="w-3 h-3" />
                      <span>UPI / Payment Info</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Pricing Stack Controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] flex items-center justify-center shadow-xs active:scale-90"
              aria-label="Previous package"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {PRICING_PACKAGES.map((pkg, idx) => (
              <button
                key={pkg.id}
                onClick={() => setActiveMobileIdx(idx)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  idx === activeMobileIdx
                    ? 'bg-[#E8912D] text-white shadow-xs'
                    : 'bg-white text-[#3E2F3A]/70 border border-[#3E2F3A]/10'
                }`}
              >
                {pkg.price}
              </button>
            ))}

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] flex items-center justify-center shadow-xs active:scale-90"
              aria-label="Next package"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* TABLET & DESKTOP: 3-Column Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isHighlighted = pkg.highlighted;
            const waBookingMessage = `Hello Mukta ji, I would like to book the "${pkg.name}" Tarot Guidance package (${pkg.price}).`;

            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between text-center transition-all duration-200 ${
                  isHighlighted 
                    ? 'border-2 border-[#E8912D] shadow-lg shadow-[#E8912D]/10 md:-translate-y-1' 
                    : 'border border-[#3E2F3A]/10 shadow-sm hover:shadow-md'
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E8912D] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-serif text-[#3E2F3A] mb-3">
                    {pkg.name}
                  </h3>

                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#E8912D] mb-2 tracking-tight">
                    {pkg.price}
                  </div>

                  <p className="text-xs sm:text-sm text-[#3E2F3A]/70 mb-6">
                    {pkg.tagline}
                  </p>

                  <ul className="text-left text-xs sm:text-sm text-[#3E2F3A]/80 space-y-2.5 mb-8 pb-6 border-b border-[#3E2F3A]/5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#E8912D] text-xs mt-0.5">✦</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={PROFILE_INFO.whatsappUrl(waBookingMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all active:scale-98 ${
                      isHighlighted
                        ? 'bg-[#E8912D] text-white hover:bg-[#d68023] shadow-md shadow-[#E8912D]/20'
                        : 'border border-[#E8912D] text-[#E8912D] hover:bg-[#E8912D]/10'
                    }`}
                  >
                    Book on WhatsApp
                  </a>

                  <button
                    onClick={() => onOpenPaymentModal(pkg)}
                    className="text-xs text-[#3E2F3A]/60 hover:text-[#3E2F3A] flex items-center justify-center gap-1 py-1 cursor-pointer"
                  >
                    <CreditCard className="w-3 h-3" />
                    <span>UPI / Payment Info</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Payment Methods Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm font-medium text-[#3E2F3A]/70 tracking-wide">
            Pay by UPI · Paytm · Cash
          </p>
          <p className="text-[11px] text-[#3E2F3A]/50 mt-1">
            Paytm UPI: <span className="font-mono font-medium text-[#3E2F3A]">9711241456@paytm</span>
          </p>
        </div>

      </div>
    </section>
  );
};
