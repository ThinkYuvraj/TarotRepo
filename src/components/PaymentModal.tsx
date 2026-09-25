import React, { useState } from 'react';
import { ServicePackage, PROFILE_INFO } from '../data/content';
import { X, Check, Copy, MessageCircle, QrCode, ShieldCheck, AlertCircle } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: ServicePackage;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
}) => {
  const [copied, setCopied] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userQuery, setUserQuery] = useState('');
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const upiId = "9711241456@paytm";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const amountText = selectedPackage ? selectedPackage.price : "As per package";
  const pkgName = selectedPackage ? selectedPackage.name : "Tarot Guidance Session";

  const buildWhatsAppMessage = () => {
    let msg = `Hello Mukta ji,\n\nI would like to confirm my booking for the "${pkgName}" package (${amountText}).`;
    if (userName.trim()) msg += `\nName: ${userName.trim()}`;
    if (userPhone.trim()) msg += `\nMobile: ${userPhone.trim()}`;
    if (userQuery.trim()) msg += `\nQuestion / Request: ${userQuery.trim()}`;
    msg += `\n\n[User Consent Confirmed: I agree that Mukta Bhatnagar receives my details for scheduling & consultation.]`;
    return msg;
  };

  const handleProceedToWhatsApp = (e: React.MouseEvent) => {
    if (!consentAccepted) {
      e.preventDefault();
      setValidationError("Please check the consent box below to confirm that Mukta Bhatnagar will receive your details.");
      return;
    }
    setValidationError('');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#3E2F3A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF7F0] border border-[#3E2F3A]/15 rounded-3xl max-w-lg w-full shadow-2xl relative p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white text-[#3E2F3A] flex items-center justify-center hover:bg-neutral-100 border border-[#3E2F3A]/10 shadow-sm"
          aria-label="Close payment modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="text-center mb-5">
          <div className="w-10 h-10 rounded-full bg-[#E8912D]/15 text-[#E8912D] flex items-center justify-center mx-auto mb-2">
            <QrCode className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-serif text-[#3E2F3A]">
            Confirm Slot & Payment
          </h3>
          <p className="text-xs text-[#3E2F3A]/70 mt-1">
            Complete details to connect directly with Mukta Bhatnagar
          </p>
        </div>

        {/* Selected Package Details */}
        <div className="bg-white rounded-2xl p-4 border border-[#3E2F3A]/10 mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-[#3E2F3A]/60 font-medium">Selected Booking</div>
            <div className="font-serif text-lg text-[#3E2F3A] font-semibold">{pkgName}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-[#3E2F3A]/60 font-medium">Amount</div>
            <div className="font-serif text-xl font-bold text-[#E8912D]">{amountText}</div>
          </div>
        </div>

        {/* User Details Form for Booking */}
        <div className="bg-white/80 rounded-2xl p-4 border border-[#3E2F3A]/10 mb-4 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C9A45C]">
            Your Details for Mukta Ji
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-[#3E2F3A]/80 mb-1">Your Full Name</label>
              <input
                type="text"
                placeholder="e.g. Priya Sharma"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-[#3E2F3A]/15 focus:outline-none focus:ring-1 focus:ring-[#E8912D]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[#3E2F3A]/80 mb-1">Mobile / WhatsApp No.</label>
              <input
                type="tel"
                placeholder="e.g. 98123 45678"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-[#3E2F3A]/15 focus:outline-none focus:ring-1 focus:ring-[#E8912D]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] font-medium text-[#3E2F3A]/80 mb-1">Topic / Question (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Career decision, Relationship or General month outlook"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-[#3E2F3A]/15 focus:outline-none focus:ring-1 focus:ring-[#E8912D]"
            />
          </div>
        </div>

        {/* UPI Details Box */}
        <div className="bg-[#F7EDE6] rounded-2xl p-4 border border-[#3E2F3A]/10 mb-4 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-[#3E2F3A]/70">
            <span>UPI ID (Paytm / GPay / PhonePe)</span>
            <span className="font-mono font-medium text-[#3E2F3A]">Primary</span>
          </div>

          <div className="flex items-center justify-between bg-white rounded-xl p-2.5 border border-[#3E2F3A]/10">
            <span className="font-mono text-sm font-semibold text-[#3E2F3A] select-all">
              {upiId}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[#3E2F3A] text-white hover:bg-[#523e4d] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>

          <div className="text-xs text-[#3E2F3A]/75 flex items-center justify-between">
            <span>Official Mobile:</span>
            <span className="font-mono font-semibold text-[#3E2F3A]">{PROFILE_INFO.phoneFormatted}</span>
          </div>
        </div>

        {/* USER CONSENT MANDATORY CHECKBOX */}
        <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3.5 mb-4">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={consentAccepted}
              onChange={(e) => {
                setConsentAccepted(e.target.checked);
                if (e.target.checked) setValidationError('');
              }}
              className="mt-0.5 w-4 h-4 rounded text-[#E8912D] focus:ring-[#E8912D] border-gray-300 shrink-0 cursor-pointer"
            />
            <span className="text-[11px] sm:text-xs text-[#3E2F3A]/85 leading-relaxed">
              <strong className="text-[#3E2F3A]">User Privacy Consent:</strong> I give my explicit consent to <strong>Mukta Bhatnagar</strong> receiving and securely processing my personal information (such as my name, mobile number, and consultation query) for scheduling, consultation, and WhatsApp communication in full client confidentiality.
            </span>
          </label>

          {validationError && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700 mt-2 bg-rose-50 p-2 rounded-lg border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}
        </div>

        {/* CTA to WhatsApp confirmation */}
        <div className="flex flex-col gap-2.5">
          <a
            href={consentAccepted ? PROFILE_INFO.whatsappUrl(buildWhatsAppMessage()) : '#'}
            target={consentAccepted ? "_blank" : undefined}
            rel={consentAccepted ? "noopener noreferrer" : undefined}
            onClick={handleProceedToWhatsApp}
            className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm shadow-md transition-all ${
              consentAccepted
                ? 'bg-[#25D366] text-white hover:bg-[#20ba59] shadow-[#25D366]/25 active:scale-98'
                : 'bg-neutral-300 text-neutral-600 cursor-not-allowed opacity-90'
            }`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Confirm Slot on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-1.5 text-xs text-[#3E2F3A]/70 hover:text-[#3E2F3A]"
          >
            Cancel / Close
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#3E2F3A]/60">
          <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
          <span>Strict client confidentiality guaranteed</span>
        </div>

      </div>
    </div>
  );
};
