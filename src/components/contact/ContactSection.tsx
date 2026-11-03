import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { storeConfig } from '../../data/storeConfig';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Buying CCTV Equipment');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Direct WhatsApp redirect with inquiry
    const inquiryUrl = `https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `*New Website Inquiry*\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${message || 'No additional message'}`
    )}`;

    window.open(inquiryUrl, '_blank');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy mt-3 tracking-tight">
            Contact Majid CCTV Store
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Need pricing on bulk cameras or want to schedule an immediate installation? Get in touch with us through phone, WhatsApp, or showroom visit.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <a
              href={`tel:${storeConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:border-brand-blue/50 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
                  Call Owner Directly
                </span>
                <span className="text-base font-bold text-slate-900">
                  {storeConfig.contact.phoneDisplay}
                </span>
                <span className="text-[11px] text-emerald-600 block">Available during working hours</span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Majid CCTV Store! I would like to inquire about camera rates and availability.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:border-emerald-500/50 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 fill-emerald-600" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
                  WhatsApp Instant Chat
                </span>
                <span className="text-base font-bold text-slate-900">
                  {storeConfig.contact.whatsappDisplay}
                </span>
                <span className="text-[11px] text-emerald-600 block">Fastest response for quotes & photos</span>
              </div>
            </a>

            {/* Showroom Address */}
            <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
                  Showroom & Outlet
                </span>
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  {storeConfig.contact.address}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{storeConfig.contact.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Demo Notice Disclaimer */}
            <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-200/80 text-xs text-slate-600 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-800">Demo Prototype:</strong> This store was built for demo presentation. All camera specs, PKR pricing, and forms are fully functional.
              </p>
            </div>
          </div>

          {/* Quick Inquiry / Quote Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-xl font-bold text-brand-navy mb-1">
              Request a Quick CCTV Quote
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your requirements below to receive camera recommendations and free estimation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0300 1234567"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Required Service / Equipment
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  <option value="Buying CCTV Equipment">Buying CCTV Cameras / NVR</option>
                  <option value="Home CCTV Installation">Home / Villa CCTV Installation</option>
                  <option value="Retail Shop Installation">Shop / Retail Store Installation</option>
                  <option value="Office / Corporate Installation">Corporate / Office Installation</option>
                  <option value="CCTV Repair & Maintenance">System Repair & Mobile App Setup</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Details (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Need 4 dome cameras and 1 DVR for my medical store in Lahore..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-brand-blue/30 transition-all text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Inquiry via WhatsApp</span>
              </button>

              {isSubmitted && (
                <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-700 text-xs rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message was prepared and WhatsApp opened.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
