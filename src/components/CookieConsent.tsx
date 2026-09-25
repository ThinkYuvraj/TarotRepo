import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings, Check, X } from 'lucide-react';

interface CookiePreferences {
  essential: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const savedConsent = localStorage.getItem('mukta_cookie_consent');
    if (!savedConsent) {
      // Small timeout so it animates in smoothly after initial page load
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom event to reopen cookie settings from Footer
  useEffect(() => {
    const handleOpenSettings = () => {
      setShowModal(true);
    };
    window.addEventListener('open_cookie_settings', handleOpenSettings);
    return () => window.removeEventListener('open_cookie_settings', handleOpenSettings);
  }, []);

  const saveConsent = (preferences: CookiePreferences) => {
    localStorage.setItem('mukta_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  };

  const handleSaveCustom = () => {
    saveConsent({
      essential: true,
      analytics: analyticsAllowed,
      marketing: marketingAllowed,
      timestamp: new Date().toISOString(),
    });
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* Floating Bottom Cookie Banner */}
      {showBanner && !showModal && (
        <div 
          role="region" 
          aria-label="Cookie consent banner"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-[#FBF7F0]/98 backdrop-blur-md border border-[#3E2F3A]/15 shadow-2xl rounded-2xl p-5 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-start gap-3.5 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#E8912D]/15 text-[#E8912D] flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-serif font-bold text-[#3E2F3A]">
                Cookie & Privacy Choices
              </h3>
              <p className="text-xs text-[#3E2F3A]/80 leading-relaxed mt-1">
                We use cookies to ensure fast page loads, appointment scheduling, and to understand how visitors find Mukta Bhatnagar’s guidance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-[#3E2F3A]/8">
            <button
              onClick={handleAcceptAll}
              className="flex-1 py-2 px-3 rounded-full bg-[#E8912D] text-white hover:bg-[#d47f1f] active:scale-95 text-xs font-semibold shadow-xs transition-all"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="py-2 px-3 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] hover:bg-neutral-50 active:scale-95 text-xs font-medium transition-all"
            >
              Essential Only
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="p-2 rounded-full text-[#3E2F3A]/70 hover:text-[#3E2F3A] hover:bg-white/80 transition-all"
              aria-label="Open Cookie Preferences"
              title="Cookie Preferences"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Detailed Cookie Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-[#3E2F3A]/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#FBF7F0] border border-[#3E2F3A]/15 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#3E2F3A]/10 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E8912D]/15 text-[#E8912D] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#3E2F3A]">
                  Cookie Preferences
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full hover:bg-[#3E2F3A]/5 flex items-center justify-center text-[#3E2F3A]/60 hover:text-[#3E2F3A] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#3E2F3A]/80 leading-relaxed mb-5">
              Personalize which cookies you allow while browsing. Strict adherence to client confidentiality and data privacy is maintained at all times.
            </p>

            {/* Cookie Categories */}
            <div className="space-y-4 mb-6">
              
              {/* Category 1: Essential (Always active) */}
              <div className="p-3.5 rounded-xl bg-white border border-[#3E2F3A]/10 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#3E2F3A]">Strictly Necessary Cookies</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      Always Active
                    </span>
                  </div>
                  <p className="text-[11px] text-[#3E2F3A]/70 mt-1 leading-normal">
                    Required for core website security, navigating pages, responsive forms, and remembering appointment selections.
                  </p>
                </div>
                <div className="pt-0.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              {/* Category 2: Analytics */}
              <div className="p-3.5 rounded-xl bg-white border border-[#3E2F3A]/10 flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#3E2F3A]">Analytics & Performance</span>
                  <p className="text-[11px] text-[#3E2F3A]/70 mt-1 leading-normal">
                    Helps measure website visits anonymously so Mukta Bhatnagar can improve spiritual guidance availability.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer pt-0.5">
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#E8912D]"></div>
                </label>
              </div>

              {/* Category 3: Personalization & Inquiries */}
              <div className="p-3.5 rounded-xl bg-white border border-[#3E2F3A]/10 flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#3E2F3A]">Inquiry Preferences</span>
                  <p className="text-[11px] text-[#3E2F3A]/70 mt-1 leading-normal">
                    Allows the site to pre-fill consultation inquiries and remember preferred contact options.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer pt-0.5">
                  <input
                    type="checkbox"
                    checked={marketingAllowed}
                    onChange={(e) => setMarketingAllowed(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#E8912D]"></div>
                </label>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#3E2F3A]/10">
              <button
                onClick={handleSaveCustom}
                className="flex-1 py-2.5 px-4 rounded-full bg-[#E8912D] text-white hover:bg-[#d47f1f] active:scale-95 text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="py-2.5 px-4 rounded-full bg-white border border-[#3E2F3A]/15 text-[#3E2F3A] hover:bg-neutral-50 active:scale-95 text-xs sm:text-sm font-medium transition-all"
              >
                Accept All
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
