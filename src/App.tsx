/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TwoServices } from './components/TwoServices';
import { Pricing } from './components/Pricing';
import { Story } from './components/Story';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { SpiritualInsights } from './components/SpiritualInsights';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FullStoryModal } from './components/FullStoryModal';
import { PaymentModal } from './components/PaymentModal';
import { CookieConsent } from './components/CookieConsent';
import { ServicePackage } from './data/content';

export default function App() {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | undefined>(undefined);

  const handleOpenPayment = (pkg?: ServicePackage) => {
    setSelectedPackage(pkg);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF7F0] text-[#3E2F3A] flex flex-col font-sans selection:bg-[#B9A6D6]/30 selection:text-[#3E2F3A] overflow-x-hidden">
      {/* Website Entrance Celestial Loading Animation */}
      <PageLoader />

      {/* 1. Header & Navigation */}
      <Navbar onOpenPayment={() => handleOpenPayment()} />

      {/* Main Content Sections: Each stretched full width and centered in display */}
      <main className="w-full flex-grow flex flex-col items-center">
        {/* 1. Top Hero: photo, "Seek Clarity, Find Answers", WhatsApp + Call buttons */}
        <Hero />

        {/* 2. Two services: Tarot Guidance (lavender) and Health & Wellness (sage), with timings */}
        <TwoServices />

        {/* 3. Tarot prices: ₹1,100 • ₹2,100 • ₹5,100 */}
        <Pricing onOpenPaymentModal={handleOpenPayment} />

        {/* 4. My story: 3–4 lines + qualification chips + “Read full story” */}
        <Story onOpenFullStory={() => setIsStoryModalOpen(true)} />

        {/* 5. Reviews: actual testimonial poster cards */}
        <Reviews />

        {/* 6. Gallery: office session & tarot setup photos */}
        <Gallery />

        {/* 7. Contact: address, timings, phone, WhatsApp, Google Map */}
        <Contact />

        {/* Spiritual Insights & FAQ sections (Minimalist & Clean) */}
        <SpiritualInsights />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <FullStoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedPackage={selectedPackage}
      />

      {/* Cookie Consent Banner & Preferences */}
      <CookieConsent />
    </div>
  );
}
