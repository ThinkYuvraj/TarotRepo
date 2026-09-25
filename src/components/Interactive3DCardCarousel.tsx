import React, { useState, useRef, useEffect } from 'react';
import { PROFILE_INFO } from '../data/content';
import { Sparkles, ChevronLeft, ChevronRight, Heart, Compass, TrendingUp, Sparkle, Sun, ShieldCheck } from 'lucide-react';

interface TarotFeatureCard {
  id: string;
  category: string;
  title: string;
  tagline: string;
  cardName: string;
  meaning: string;
  remedyHint: string;
  icon: React.ReactNode;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  textColor: string;
}

const FEATURE_CARDS: TarotFeatureCard[] = [
  {
    id: 'love',
    category: 'RELATIONSHIP & LOVE',
    title: 'Love & Heart Harmony',
    tagline: 'Remove confusion in romantic bonds',
    cardName: 'The Lovers · Two of Cups',
    meaning: 'Understand underlying emotional energies, heal misunderstandings, and attract authentic mutual devotion.',
    remedyHint: 'Gentle heart-chakra alignment & daily mindful communication practice.',
    icon: <Heart className="w-5 h-5 text-rose-500" />,
    accentColor: '#E8912D',
    bgGradient: 'from-[#FFF5F2] to-[#FCEAE5]',
    borderColor: 'border-[#F7C5B8]',
    textColor: 'text-[#8A3B2B]',
  },
  {
    id: 'career',
    category: 'CAREER & GROWTH',
    title: 'Career & Ambition',
    tagline: 'Make confident professional moves',
    cardName: 'The Emperor · Ace of Wands',
    meaning: 'Clarity on new job offers, business ventures, workplace dynamics, and unlocking hidden opportunities.',
    remedyHint: 'Strategic action timing & solar plexus grounding remedy.',
    icon: <Compass className="w-5 h-5 text-amber-600" />,
    accentColor: '#C9A45C',
    bgGradient: 'from-[#FCF9F0] to-[#F8F1DF]',
    borderColor: 'border-[#E7D6A7]',
    textColor: 'text-[#6B501B]',
  },
  {
    id: 'wealth',
    category: 'MONEY & ABUNDANCE',
    title: 'Financial Flow',
    tagline: 'Clear blocks to prosperity',
    cardName: 'Ten of Pentacles · The Sun',
    meaning: 'Identify subconscious money blockages, navigate family assets, and welcome steady financial stability.',
    remedyHint: 'Practical wealth affirmations & intentional evening gratitude.',
    icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    accentColor: '#8FAF8A',
    bgGradient: 'from-[#F2F8F2] to-[#E5F1E5]',
    borderColor: 'border-[#C2E0C2]',
    textColor: 'text-[#2D5A2D]',
  },
  {
    id: 'health',
    category: 'MIND & BODY WELLNESS',
    title: 'Cellular Vitality',
    tagline: 'Integrative health & soul peace',
    cardName: 'The Star · Temperance',
    meaning: 'Mukta’s unique synthesis of Tarot guidance and Diploma in Holistic Dietetics to rebalance your daily lifestyle.',
    remedyHint: 'Nutritional anti-inflammatory habit shifts & breathwork.',
    icon: <Sun className="w-5 h-5 text-orange-500" />,
    accentColor: '#B9A6D6',
    bgGradient: 'from-[#F7F3FC] to-[#EEE5F8]',
    borderColor: 'border-[#D5C2ED]',
    textColor: 'text-[#5E3D85]',
  },
  {
    id: 'monthly',
    category: 'MONTHLY GUIDANCE',
    title: 'Month-Ahead Blueprint',
    tagline: 'Comprehensive 30-day roadmap',
    cardName: 'Wheel of Fortune · The Magician',
    meaning: 'A complete month-long outlook covering love, finances, career milestones, and proactive remedies.',
    remedyHint: 'Personalized root-cause remedies tailored for your monthly astrological cycle.',
    icon: <Sparkle className="w-5 h-5 text-indigo-500" />,
    accentColor: '#E8912D',
    bgGradient: 'from-[#FFF8EE] to-[#FDECCE]',
    borderColor: 'border-[#F7D89C]',
    textColor: 'text-[#825211]',
  },
];

export const Interactive3DCardCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState<Record<number, boolean>>({});
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalCards = FEATURE_CARDS.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
  };

  const toggleFlip = (index: number) => {
    setIsFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Touch Swipe for Mobile & Tablet
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#FBF7F0] overflow-hidden select-none">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header with Responsive Typography */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8912D]/10 text-xs font-semibold uppercase tracking-widest text-[#E8912D] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Guidance Cards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3E2F3A] leading-tight">
            Explore Your Reading Areas
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#3E2F3A]/75 mt-2 max-w-lg mx-auto">
            Swipe or click the 3D cards below to explore guidance areas and remedies. Tap a card to flip for deeper insights.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div 
          className="relative w-full max-w-4xl mx-auto h-[420px] xs:h-[450px] sm:h-[470px] md:h-[490px] flex items-center justify-center perspective-[1200px]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {FEATURE_CARDS.map((card, index) => {
            // Calculate relative offset from active card
            let offset = index - activeIndex;
            if (offset < -Math.floor(totalCards / 2)) offset += totalCards;
            if (offset > Math.floor(totalCards / 2)) offset -= totalCards;

            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // 3D Transform calculations for mobile and tablet
            let translateX = offset * 55; // percentage or px
            let rotateY = offset * -25;
            let scale = 1 - Math.abs(offset) * 0.14;
            let zIndex = 20 - Math.abs(offset) * 5;
            let opacity = 1 - Math.abs(offset) * 0.28;

            const isCardFlipped = !!isFlipped[index];

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (isActive) {
                    toggleFlip(index);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                style={{
                  transform: `translate3d(${translateX}%, 0, 0) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  willChange: 'transform, opacity',
                  transition: 'transform 0.45s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.45s ease',
                }}
                className={`absolute cursor-pointer w-[270px] xs:w-[300px] sm:w-[340px] md:w-[380px] h-[370px] xs:h-[390px] sm:h-[410px] md:h-[430px] rounded-3xl p-1 shadow-2xl transition-all ${
                  isActive 
                    ? 'ring-2 ring-[#E8912D]/40 shadow-[#3E2F3A]/25' 
                    : 'pointer-events-auto filter brightness-95'
                }`}
              >
                {/* Flippable Card Container */}
                <div 
                  className={`w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] rounded-[22px] ${
                    isCardFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  
                  {/* FRONT SIDE */}
                  <div className={`absolute inset-0 [backface-visibility:hidden] rounded-[22px] bg-gradient-to-br ${card.bgGradient} border-2 ${card.borderColor} p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-inner`}>
                    
                    {/* Top Decorative Header */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase ${card.textColor}`}>
                          {card.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/90 border border-[#3E2F3A]/10 flex items-center justify-center shadow-xs">
                          {card.icon}
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#3E2F3A] leading-snug mb-1">
                        {card.title}
                      </h3>
                      
                      <div className="inline-block text-xs font-semibold text-[#E8912D] mb-4">
                        ✦ {card.cardName}
                      </div>

                      <p className="text-xs sm:text-sm text-[#3E2F3A]/85 leading-relaxed">
                        {card.meaning}
                      </p>
                    </div>

                    {/* Bottom Prompt / Action */}
                    <div className="pt-4 border-t border-[#3E2F3A]/10 flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs text-[#3E2F3A]/70 italic flex items-center gap-1">
                        <span>Tap to view remedy</span>
                      </span>

                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/95 border border-[#3E2F3A]/10 font-medium text-[#3E2F3A]">
                        {index + 1}/{totalCards}
                      </span>
                    </div>

                    {/* Celestial watermark */}
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-[#E8912D]/10 pointer-events-none blur-xl" />
                  </div>

                  {/* BACK SIDE (REMEDY & GUIDANCE INSIGHT) */}
                  <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[22px] bg-[#3E2F3A] text-white border-2 border-[#E8912D]/50 p-6 sm:p-7 flex flex-col justify-between shadow-2xl`}>
                    
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3">
                        <span className="text-[11px] uppercase tracking-wider text-[#E8912D] font-bold flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Mukta Ji’s Remedy Hint</span>
                        </span>
                        <span className="text-xs text-white/50">Flip Back ↺</span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-serif text-[#FBF7F0] mb-2">
                        {card.title}
                      </h4>

                      <div className="bg-white/10 rounded-xl p-3.5 mb-4 border border-white/10 text-xs sm:text-sm leading-relaxed text-amber-100/90">
                        {card.remedyHint}
                      </div>

                      <p className="text-xs text-white/75 leading-relaxed">
                        Every consultation at GTB Enclave or via phone call includes tailored remedies designed to balance emotional peace and cellular wellness.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/15">
                      <a
                        href={PROFILE_INFO.whatsappUrl(`Hello Mukta ji, I would like guidance for ${card.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#20ba59] active:scale-95 transition-all"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Controls (Optimized for Mobile & Tablet touch) */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] hover:text-[#E8912D] hover:border-[#E8912D] active:scale-90 flex items-center justify-center shadow-sm transition-all focus:outline-none"
            aria-label="Previous 3D Card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {FEATURE_CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex 
                    ? 'w-7 bg-[#E8912D]' 
                    : 'w-2 bg-[#3E2F3A]/20 hover:bg-[#3E2F3A]/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] hover:text-[#E8912D] hover:border-[#E8912D] active:scale-90 flex items-center justify-center shadow-sm transition-all focus:outline-none"
            aria-label="Next 3D Card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
