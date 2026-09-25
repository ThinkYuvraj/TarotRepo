import React, { useState } from 'react';
import { SPIRITUAL_INSIGHTS, InsightArticle } from '../data/content';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export const SpiritualInsights: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  return (
    <section className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#FBF7F0] border-t border-[#3E2F3A]/5">
      <div className="max-w-7xl 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A45C]">
            Spiritual Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-2">
            Wisdom for Mind & Soul
          </h2>
          <p className="text-sm sm:text-base text-[#3E2F3A]/70 mt-2">
            Gentle reflections on health, intuition, and finding balance in everyday life.
          </p>
        </div>

        {/* 3 Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPIRITUAL_INSIGHTS.map((item) => (
            <article
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="bg-white rounded-2xl p-6 border border-[#3E2F3A]/10 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#C9A45C] font-semibold uppercase tracking-wider mb-2">
                  <span>{item.category}</span>
                  <span className="text-[#3E2F3A]/50 font-normal">{item.readTime}</span>
                </div>

                <h3 className="text-xl font-serif text-[#3E2F3A] mb-3 group-hover:text-[#E8912D] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#3E2F3A]/75 leading-relaxed">
                  {item.snippet}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#3E2F3A]/5 flex items-center justify-between text-xs font-semibold text-[#E8912D]">
                <span>Read reflection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#3E2F3A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-[#FBF7F0] border border-[#3E2F3A]/15 rounded-3xl max-w-lg w-full shadow-2xl relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white text-[#3E2F3A] flex items-center justify-center hover:bg-neutral-100 border border-[#3E2F3A]/10 shadow-sm"
              aria-label="Close insight"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-semibold tracking-wider uppercase text-[#E8912D]">
              {activeArticle.category} · {activeArticle.readTime}
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#3E2F3A] mt-2 mb-4 leading-snug">
              {activeArticle.title}
            </h3>

            <p className="text-sm sm:text-base text-[#3E2F3A]/85 leading-relaxed whitespace-pre-line font-normal">
              {activeArticle.fullText}
            </p>

            <div className="mt-6 pt-4 border-t border-[#3E2F3A]/10 flex items-center justify-between">
              <span className="text-xs font-script text-2xl text-[#C9A45C]">
                Mukta Bhatnagar
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-1.5 rounded-full bg-[#3E2F3A] text-white text-xs font-medium hover:bg-[#523e4d]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
