import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#F7EDE6]/30 border-t border-[#3E2F3A]/5">
      <div className="max-w-5xl 2xl:max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A45C]">
            Questions & Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3E2F3A] mt-2">
            Frequently Asked
          </h2>
          <p className="text-sm text-[#3E2F3A]/70 mt-2">
            Everything you need to know about preparing for your session.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#3E2F3A]/10 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-[#3E2F3A] hover:text-[#E8912D] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-[#E8912D] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-[#3E2F3A]/80 leading-relaxed border-t border-[#3E2F3A]/5 pt-3 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
