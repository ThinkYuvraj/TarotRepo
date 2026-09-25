import React from 'react';
import { SERVICES_OVERVIEW, PROFILE_INFO } from '../data/content';
import { Check, Clock, ArrowRight } from 'lucide-react';

export const TwoServices: React.FC = () => {
  return (
    <section id="services" className="w-full flex justify-center py-16 sm:py-20 md:py-24 bg-[#FBF7F0] scroll-mt-24">
      <div className="max-w-7xl 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C9A45C]">
            How I Can Help
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E2F3A] mt-2">
            Two ways to feel better
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#3E2F3A]/75 mt-2">
            Balancing inner clarity and physical wellness for a grounded, empowered life.
          </p>
        </div>

        {/* Two Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          
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
                className={`${cardBg} ${borderCol} border rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#3E2F3A]/10 group scroll-mt-24`}
              >
                <div>
                  {/* Category Pill / Kicker */}
                  <div className={`text-xs font-bold tracking-wider uppercase mb-3 ${categoryCol}`}>
                    {service.category}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#3E2F3A] mb-6 group-hover:text-[#E8912D] transition-colors">
                    {service.title}
                  </h3>

                  {/* Bullet Points with Checkmarks */}
                  <ul className="space-y-3.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-[#3E2F3A]/85">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isTarot ? 'bg-[#B9A6D6]/30' : 'bg-[#8FAF8A]/30'}`}>
                          <Check className={`w-3.5 h-3.5 ${isTarot ? 'text-[#876EB2]' : 'text-[#5B8556]'}`} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timing Footer & Quick Link */}
                <div className="pt-6 border-t border-[#3E2F3A]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold ${timingBg} shadow-xs`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.timing}</span>
                  </div>

                  <a
                    href={PROFILE_INFO.whatsappUrl(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#E8912D] hover:text-[#d47f1f] group-hover:translate-x-1 transition-transform"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
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
