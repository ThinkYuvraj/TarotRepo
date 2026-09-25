import React from 'react';
import { BookOpen, Award, GraduationCap, Building2, Sparkles, Heart } from 'lucide-react';

interface StoryProps {
  onOpenFullStory: () => void;
}

export const Story: React.FC<StoryProps> = ({ onOpenFullStory }) => {
  return (
    <section id="about" className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#FBF7F0] scroll-mt-24">
      <div className="max-w-5xl 2xl:max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Card Container */}
        <div className="bg-white/80 backdrop-blur-sm border border-[#3E2F3A]/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg shadow-[#3E2F3A]/5 flex flex-col items-center text-center relative overflow-hidden">
          
          {/* Subtle Background Glow Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-[#B9A6D6]/20 via-[#F7EDE6]/30 to-transparent blur-2xl pointer-events-none" />

          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDE6] text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C] mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E8912D]" />
            <span>My Story</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mb-5 max-w-2xl">
            Young at heart, here to help.
          </h2>

          {/* Story Narrative */}
          <p className="text-base sm:text-lg lg:text-xl text-[#3E2F3A]/85 leading-relaxed mb-8 max-w-3xl font-normal">
            “A breast cancer survivor (2010), I healed by learning nutrition and health. Today I share what I learnt, through tarot and wellness coaching to help you find balance for your Mind, Body & Soul.”
          </p>

          {/* Qualification Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-9">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBF7F0] border border-[#3E2F3A]/15 text-xs sm:text-sm font-medium text-[#3E2F3A] shadow-xs hover:border-[#E8912D] hover:scale-105 transition-all">
              <Award className="w-4 h-4 text-[#E8912D]" />
              <span>Certified Tarot Reader – Occult Academy</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBF7F0] border border-[#3E2F3A]/15 text-xs sm:text-sm font-medium text-[#3E2F3A] shadow-xs hover:border-[#8FAF8A] hover:scale-105 transition-all">
              <GraduationCap className="w-4 h-4 text-[#8FAF8A]" />
              <span>Diploma, Holistic Health – ISMN</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBF7F0] border border-[#3E2F3A]/15 text-xs sm:text-sm font-medium text-[#3E2F3A] shadow-xs hover:border-[#B9A6D6] hover:scale-105 transition-all">
              <Building2 className="w-4 h-4 text-[#B9A6D6]" />
              <span>30 yrs at DAV Institute</span>
            </div>
          </div>

          {/* Read Full Story Button */}
          <button
            onClick={onOpenFullStory}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-[#E8912D] bg-[#E8912D] text-white hover:bg-[#d68023] hover:border-[#d68023] active:scale-95 transition-all text-sm sm:text-base font-semibold cursor-pointer shadow-md shadow-[#E8912D]/20"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read full story</span>
          </button>

        </div>

      </div>
    </section>
  );
};
