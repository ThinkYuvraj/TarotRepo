import React, { useState, useRef } from 'react';
import muktaMainPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  tag: string;
  objectPos: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "session-main",
    title: "Mukta Bhatnagar at Reading Table",
    caption: "Certified Tarot Reader & Cellular Health Coach conducting in-person and phone guidance sessions.",
    image: muktaMainPhoto,
    tag: "Consultation Table",
    objectPos: "object-center"
  },
  {
    id: "tarot-spread",
    title: "Tarot Cards Spread & Healing Crystals",
    caption: "The Sun, The Lovers, and Emperor cards spread across celestial blue cloth with amethyst and rose quartz.",
    image: muktaMainPhoto,
    tag: "Tarot Spread",
    objectPos: "object-bottom"
  },
  {
    id: "celestial-mandala",
    title: "Astrological Mandala & Sacred Space",
    caption: "Golden moon & zodiac wheel backdrop with warm candlelight for centered, peaceful readings.",
    image: muktaMainPhoto,
    tag: "Sacred Altar",
    objectPos: "object-top"
  },
  {
    id: "delhi-sanctuary",
    title: "Delhi Sanctuary & Online Sessions",
    caption: "Peaceful atmosphere at 36-A, Pocket-A, MIG Flats, GTB Enclave, Delhi 110093.",
    image: muktaMainPhoto,
    tag: "Reading Sanctuary",
    objectPos: "object-center"
  }
];

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [mobileIdx, setMobileIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalItems = GALLERY_ITEMS.length;

  const handleNextMobile = () => {
    setMobileIdx((prev) => (prev + 1) % totalItems);
  };

  const handlePrevMobile = () => {
    setMobileIdx((prev) => (prev - 1 + totalItems) % totalItems);
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
    <section id="gallery" className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#FBF7F0] scroll-mt-24">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A45C]">
            Sanctuary & Setup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-2">
            Inside the reading space
          </h2>
          <p className="text-xs sm:text-sm text-[#3E2F3A]/70 mt-2">
            A peaceful atmosphere at 36-A, MIG Flats, GTB Enclave, Delhi for in-person readings and phone consultations.
          </p>
        </div>

        {/* MOBILE VIEW: 3D Stack Photo Carousel */}
        <div className="block sm:hidden mb-6">
          <div 
            className="relative h-[360px] w-full max-w-[300px] mx-auto perspective-[1000px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {GALLERY_ITEMS.map((item, idx) => {
              let stackPos = idx - mobileIdx;
              if (stackPos < 0) stackPos += totalItems;

              if (stackPos > 2) return null;

              const isTop = stackPos === 0;
              const translateY = stackPos * 12;
              const scale = 1 - stackPos * 0.05;
              const zIndex = 10 - stackPos;
              const opacity = 1 - stackPos * 0.2;
              const rotate = stackPos === 1 ? '2deg' : stackPos === 2 ? '-2deg' : '0deg';

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isTop) {
                      setSelectedPhoto(item);
                    } else {
                      setMobileIdx(idx);
                    }
                  }}
                  style={{
                    transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate})`,
                    zIndex,
                    opacity,
                    willChange: 'transform, opacity',
                    transition: 'transform 0.35s cubic-bezier(0.2, 0.9, 0.4, 1.1), opacity 0.35s ease',
                  }}
                  className="absolute inset-0 rounded-2xl overflow-hidden bg-white border-2 border-white shadow-xl cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.objectPos}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-4 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8912D] mb-1">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-lg font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-white/80 line-clamp-2 mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={handlePrevMobile}
              className="w-9 h-9 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] flex items-center justify-center shadow-xs active:scale-90"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs text-[#3E2F3A]/70 font-medium">
              Swipe or tap photo to expand · {mobileIdx + 1}/{totalItems}
            </span>

            <button
              onClick={handleNextMobile}
              className="w-9 h-9 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] flex items-center justify-center shadow-xs active:scale-90"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* TABLET & DESKTOP: Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#3E2F3A]/10 shadow-sm hover:shadow-md cursor-pointer aspect-square transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover ${item.objectPos} group-hover:scale-105 transition-transform duration-500`}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F3A]/85 via-black/20 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8912D] bg-[#3E2F3A]/60 px-2 py-0.5 rounded-full inline-block mb-1.5 backdrop-blur-xs">
                  {item.tag}
                </span>
                <h3 className="font-serif text-lg font-medium leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#3E2F3A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#3E2F3A]/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-[#FBF7F0] rounded-3xl overflow-hidden max-w-2xl w-full border border-[#3E2F3A]/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#3E2F3A] flex items-center justify-center hover:bg-white shadow-md border border-[#3E2F3A]/10 cursor-pointer"
              aria-label="Close photo view"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[4/3] bg-neutral-900">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E8912D]">
                  {selectedPhoto.tag}
                </span>
                <span className="text-[#3E2F3A]/30">·</span>
                <span className="text-xs text-[#3E2F3A]/60">Delhi Sanctuary</span>
              </div>
              <h3 className="text-2xl font-serif text-[#3E2F3A] mb-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-[#3E2F3A]/80 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
