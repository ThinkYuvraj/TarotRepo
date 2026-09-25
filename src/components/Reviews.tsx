import React, { useState, useRef } from 'react';
import { REVIEWS } from '../data/content';
import { Sparkles, ChevronLeft, ChevronRight, MessageSquareHeart } from 'lucide-react';
import muktaStoryPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';

export const Reviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'tarot' | 'hindi'>('all');
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filteredReviews = REVIEWS.filter((item) => {
    if (activeTab === 'hindi') return item.isHindi;
    return true;
  });

  const handleNextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handlePrevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
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
    if (diff > 40) handleNextMobile();
    if (diff < -40) handlePrevMobile();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="reviews" className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#F7EDE6]/40 border-y border-[#3E2F3A]/5 scroll-mt-24">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A45C]">
            Kind Words
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-2">
            What clients say
          </h2>
          <p className="text-xs sm:text-sm text-[#3E2F3A]/70 mt-2">
            Real feedback from individuals who found clarity, calmness, and solutions.
          </p>

          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => {
                setActiveTab('all');
                setMobileIndex(0);
              }}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-[#3E2F3A] text-white shadow-sm'
                  : 'bg-white text-[#3E2F3A]/70 border border-[#3E2F3A]/10 hover:text-[#3E2F3A]'
              }`}
            >
              All Feedback ({REVIEWS.length})
            </button>
            <button
              onClick={() => {
                setActiveTab('hindi');
                setMobileIndex(0);
              }}
              className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
                activeTab === 'hindi'
                  ? 'bg-[#3E2F3A] text-white shadow-sm'
                  : 'bg-white text-[#3E2F3A]/70 border border-[#3E2F3A]/10 hover:text-[#3E2F3A]'
              }`}
            >
              Hindi Reviews
            </button>
          </div>
        </div>

        {/* MOBILE VIEW: 3D Stack Card Carousel (Reduces vertical scroll drastically) */}
        <div className="block md:hidden mb-6">
          <div 
            className="relative h-[410px] w-full max-w-[340px] mx-auto perspective-[1000px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {filteredReviews.map((rev, idx) => {
              // Calculate stack position relative to mobileIndex
              let stackPos = idx - mobileIndex;
              if (stackPos < 0) stackPos += filteredReviews.length;

              // Only show top 3 cards in stack
              if (stackPos > 2) return null;

              const isTop = stackPos === 0;
              const isNavy = rev.themeColor === 'navy';
              const cardBg = isNavy ? 'bg-[#121B33]' : 'bg-[#401217]';
              const scriptColor = isNavy ? 'text-[#E2C382]' : 'text-[#F5D899]';
              const borderColor = isNavy ? 'border-[#2B3960]' : 'border-[#69242E]';

              // 3D Stack transforms
              const translateY = stackPos * 12; // px
              const scale = 1 - stackPos * 0.05;
              const zIndex = 10 - stackPos;
              const opacity = 1 - stackPos * 0.2;
              const rotate = stackPos === 1 ? '1.5deg' : stackPos === 2 ? '-1.5deg' : '0deg';

              return (
                <div
                  key={rev.id}
                  onClick={() => !isTop && handleNextMobile()}
                  style={{
                    transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate})`,
                    zIndex,
                    opacity,
                    willChange: 'transform, opacity',
                    transition: 'transform 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.35s ease',
                  }}
                  className={`absolute inset-0 ${cardBg} ${borderColor} border-2 rounded-2xl p-5 text-white shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer ${
                    isTop ? 'ring-2 ring-[#E8912D]/40' : 'pointer-events-auto filter brightness-95'
                  }`}
                >
                  <div className="absolute top-2 right-3 text-white/10 pointer-events-none select-none">
                    ✦
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2.5 border-b border-white/15 mb-3">
                      <span className="font-script text-xl text-white tracking-wide">
                        Client Testimonial
                      </span>
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 shrink-0">
                        <img
                          src={muktaStoryPhoto}
                          alt="Mukta Bhatnagar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Message Bubble */}
                    <div className="bg-white text-[#2B2B2B] rounded-xl p-3.5 shadow-md relative text-xs leading-relaxed max-h-[220px] overflow-y-auto">
                      <p className="whitespace-pre-line font-normal">
                        "{rev.text}"
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-gray-400 font-mono">
                        <span>Verified Client</span>
                        <span className="text-red-500">❤️</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className={`font-script text-2xl ${scriptColor} tracking-wider`}>
                      {rev.clientName}
                    </span>
                    <span className="text-[10px] text-white/60 font-sans uppercase tracking-widest">
                      {rev.roleOrNote}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile 3D Stack Controls */}
          <div className="flex items-center justify-between max-w-[320px] mx-auto mt-6 px-2">
            <button
              onClick={handlePrevMobile}
              className="w-10 h-10 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] flex items-center justify-center shadow-xs active:scale-90 transition-transform"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="text-xs text-[#3E2F3A]/70 font-medium">
              Swipe or tap card · <span className="text-[#E8912D] font-bold">{mobileIndex + 1}</span> of {filteredReviews.length}
            </div>

            <button
              onClick={handleNextMobile}
              className="w-10 h-10 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] flex items-center justify-center shadow-xs active:scale-90 transition-transform"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TABLET & DESKTOP: Full Multi-Column Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredReviews.map((rev) => {
            const isNavy = rev.themeColor === 'navy';
            const cardBg = isNavy ? 'bg-[#121B33]' : 'bg-[#401217]';
            const scriptColor = isNavy ? 'text-[#E2C382]' : 'text-[#F5D899]';
            const borderColor = isNavy ? 'border-[#2B3960]' : 'border-[#69242E]';

            return (
              <div
                key={rev.id}
                className={`${cardBg} ${borderColor} border-2 rounded-2xl p-5 sm:p-6 text-white shadow-xl shadow-[#3E2F3A]/15 flex flex-col justify-between relative overflow-hidden transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className="absolute top-2 right-3 text-white/10 pointer-events-none select-none">
                  ✦
                </div>

                <div>
                  {/* Poster Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-4">
                    <span className="font-script text-xl sm:text-2xl text-white tracking-wide">
                      Client Testimonial
                    </span>
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/30 shrink-0">
                      <img
                        src={muktaStoryPhoto}
                        alt="Mukta Bhatnagar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Message Bubble */}
                  <div className="bg-white text-[#2B2B2B] rounded-xl p-4 sm:p-4.5 shadow-md relative text-xs sm:text-[13px] leading-relaxed mb-4">
                    <p className="whitespace-pre-line font-normal">
                      "{rev.text}"
                    </p>
                    
                    <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-gray-400 font-mono">
                      <span>Verified Client</span>
                      <span className="text-red-500">❤️</span>
                    </div>
                  </div>
                </div>

                {/* Footer with client name */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className={`font-script text-2xl sm:text-3xl ${scriptColor} tracking-wider`}>
                    {rev.clientName}
                  </span>
                  <span className="text-[11px] text-white/60 font-sans uppercase tracking-widest">
                    {rev.roleOrNote}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on genuine reviews */}
        <div className="mt-8 text-center text-xs text-[#3E2F3A]/60 flex items-center justify-center gap-1.5">
          <MessageSquareHeart className="w-3.5 h-3.5 text-[#E8912D]" />
          <span>Real feedback received directly from clients via WhatsApp and in-person consultations.</span>
        </div>

      </div>
    </section>
  );
};
