import React from 'react';
import muktaStoryPhoto from '../assets/images/mukta_saree_reading_1790319437505.jpg';
import { BookOpen, Award, GraduationCap, Building2 } from 'lucide-react';

interface StoryProps {
  onOpenFullStory: () => void;
}

export const Story: React.FC<StoryProps> = ({ onOpenFullStory }) => {
  return (
    <section id="about" className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#FBF7F0] scroll-mt-24">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo Column */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden shadow-lg shadow-[#3E2F3A]/8 border-2 border-white">
              <img
                src={muktaStoryPhoto}
                alt="Mukta Bhatnagar holding Tarot cards"
                className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2F3A]/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col items-start">
            
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A45C] mb-2">
              My Story
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mb-4">
              Young at heart, here to help.
            </h2>

            <p className="text-sm sm:text-base text-[#3E2F3A]/85 leading-relaxed mb-6">
              A breast cancer survivor (2010), I healed by learning nutrition and health. Today I share what I learnt, through tarot and wellness coaching.
            </p>

            {/* Qualification chips */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#3E2F3A]/15 text-xs font-medium text-[#3E2F3A]">
                <Award className="w-3.5 h-3.5 text-[#E8912D]" />
                <span>Certified Tarot Reader – Occult Academy</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#3E2F3A]/15 text-xs font-medium text-[#3E2F3A]">
                <GraduationCap className="w-3.5 h-3.5 text-[#8FAF8A]" />
                <span>Diploma, Holistic Health – ISMN</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#3E2F3A]/15 text-xs font-medium text-[#3E2F3A]">
                <Building2 className="w-3.5 h-3.5 text-[#B9A6D6]" />
                <span>30 yrs at DAV Institute</span>
              </div>
            </div>

            {/* Read full story action */}
            <button
              onClick={onOpenFullStory}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E8912D] text-[#E8912D] hover:bg-[#E8912D]/10 active:scale-95 transition-all text-sm font-semibold cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read full story</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
