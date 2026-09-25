import React from 'react';
import { SERVICES_OVERVIEW, PROFILE_INFO } from '../data/content';
import { Check, Clock, ArrowRight } from 'lucide-react';

export const TwoServices: React.FC = () => {
  return (
    <section id="services" className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#FBF7F0] scroll-mt-24">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A45C]">
            How I Can Help
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-2">
            Two ways to feel better
          </h2>
          <p className="text-sm sm:text-base text-[#3E2F3A]/75 mt-2">
            Balancing inner clarity and physical wellness for a grounded, empowered life.
          </p>
        </div>

        {/* Two Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {SERVICES_OVERVIEW.map((service) => {
            const isTarot = service.id === 'tarot';
            const cardBg = isTarot ? 'bg-[#F2EDF8]' : 'bg-[#EDF5ED]';
            const borderCol = isTarot ? 'border-[#B9A6D6]/50' : 'border-[#8FAF8A]/50';
            const categoryCol = isTarot ? 'text-[#876EB2]' : 'text-[#5B8556]';
            const timingBg = isTarot ? 'bg-white/80 text-[#5F4688]' : 'bg-white/80 text-[#3C6337]';
            
            const waMessage = isTarot
              ? "Hello Mukta ji, I would like to book a Tarot Guidance session."
              : "Hello Mukta ji, I would like to enquire about your Cellular Health and Wellness consultation.";

            return (
              <div
                key={service.id}
                id={service.id === 'wellness' ? 'wellness' : undefined}
                className={`${cardBg} ${borderCol} border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-md hover:shadow-[#3E2F3A]/5 scroll-mt-24`}
              >
                <div>
                  {/* Category Pill / Kicker */}
                  <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${categoryCol}`}>
                    {service.category}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#3E2F3A] mb-5">
                    {service.title}
                  </h3>

                  {/* Bullet Points with Checkmarks */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-[#3E2F3A]/85">
                        <Check className={`w-4 h-4 shrink-0 ${isTarot ? 'text-[#876EB2]' : 'text-[#5B8556]'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timing Footer & Quick Link */}
                <div className="pt-5 border-t border-[#3E2F3A]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${timingBg}`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.timing}</span>
                  </div>

                  <a
                    href={PROFILE_INFO.whatsappUrl(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#E8912D] hover:underline"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
