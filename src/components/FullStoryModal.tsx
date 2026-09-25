import React from 'react';
import { X, Sparkles, Heart } from 'lucide-react';
import muktaStoryPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';

interface FullStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullStoryModal: React.FC<FullStoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#3E2F3A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[#FBF7F0] border border-[#3E2F3A]/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white text-[#3E2F3A] flex items-center justify-center hover:bg-neutral-100 shadow-sm border border-[#3E2F3A]/10 transition-colors"
          aria-label="Close story"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Photo snippet */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#3E2F3A]/10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md shrink-0">
            <img
              src={muktaStoryPhoto}
              alt="Mukta Bhatnagar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
              <Sparkles className="w-3 h-3 text-[#E8912D]" />
              <span>In Her Own Words</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#3E2F3A] mt-0.5">
              Mukta Bhatnagar
            </h3>
            <p className="text-xs sm:text-sm text-[#3E2F3A]/70">
              Cellular Health Coach & Certified Tarot Reader
            </p>
          </div>
        </div>

        {/* Authentic Story Prose */}
        <div className="space-y-4 text-sm sm:text-base text-[#3E2F3A]/85 leading-relaxed font-normal">
          <p>
            “Hello, I am <strong>Mukta Bhatnagar</strong>. A senior citizen by age, but young at heart – enthusiastic, ambitious and a firm believer that life always has more to offer. My life’s motive is to help people balance their <em>Healthy Mind, Body and Soul</em>.
          </p>

          <p>
            By education, I am a Graduate and hold a <strong>Diploma in Integrative Dietetics and Holistic Health from ISMN</strong>, where I focus on improving cellular health through a healthy lifestyle plan. I am also certified in <strong>Tarot Reading from Occult Academy</strong> to provide the right solutions with effective remedies.
          </p>

          <div className="p-4 rounded-2xl bg-[#F7EDE6] border-l-4 border-[#E8912D] my-4 text-[#3E2F3A]">
            <p className="text-sm italic">
              “My turning point came in 2010 when I was detected with Breast Cancer. I was broken emotionally and physically. That phase pushed me to find answers at the cellular level. I found a wonderful team and a path to first heal and educate myself on nutrition and health.”
            </p>
          </div>

          <p>
            With approx. 30 years of work experience in a prestigious DAV Institute, and blessed with a supportive joint family – a wonderful husband, a dynamic son and a lovely daughter-in-law – I am now on a journey to share my learnings and help others.” 🌺
          </p>

          <div className="pt-4 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 bg-white border border-[#3E2F3A]/10 rounded-full font-medium">
              6+ Years Tarot Experience
            </span>
            <span className="px-3 py-1 bg-white border border-[#3E2F3A]/10 rounded-full font-medium">
              ISMN Holistic Health
            </span>
            <span className="px-3 py-1 bg-white border border-[#3E2F3A]/10 rounded-full font-medium">
              Occult Academy Certified
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#3E2F3A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#3E2F3A]/60 flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#E8912D]" />
            <span>Dedicated to clarity and wellness for all</span>
          </span>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#3E2F3A] text-white text-xs font-semibold hover:bg-[#523e4d] transition-colors"
          >
            Close Story
          </button>
        </div>

      </div>
    </div>
  );
};
