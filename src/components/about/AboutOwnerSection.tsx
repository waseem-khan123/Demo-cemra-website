import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle, 
  Users, 
  Camera, 
  BadgePercent, 
  Wrench, 
  Headphones 
} from 'lucide-react';
import { storeConfig } from '../../data/storeConfig';
import { whyChooseUsData } from '../../data/services';

export const AboutOwnerSection: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-blue" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-brand-blue" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-brand-blue" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-brand-blue" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Trusted Surveillance Leader</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy mt-3 tracking-tight">
            Meet the Owner & Security Team
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Personal commitment, technical excellence, and genuine surveillance hardware backed by full after-sales support.
          </p>
        </div>

        {/* Owner Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Owner Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-brand-navy shadow-2xl border border-slate-200 group">
              {!photoError ? (
                <img
                  src={storeConfig.owner.photoPlaceholder}
                  alt={storeConfig.owner.name}
                  onError={() => setPhotoError(true)}
                  className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-96 flex flex-col items-center justify-center bg-brand-navyDark text-slate-300 p-6 text-center">
                  <Camera className="w-16 h-16 text-brand-blue mb-3" />
                  <span className="text-lg font-bold text-white">{storeConfig.owner.name}</span>
                  <span className="text-xs text-slate-400 mt-1">{storeConfig.owner.title}</span>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark via-transparent to-transparent pointer-events-none" />

              {/* Name Tag at bottom of photo */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-brand-accent uppercase tracking-wider block">
                  {storeConfig.owner.title}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {storeConfig.owner.name}
                </h3>
                <span className="text-xs text-slate-300 mt-0.5 block">
                  {storeConfig.owner.experienceYears} Years Surveillance Experience in Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Owner Bio and Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs font-semibold">
              Certified CCTV & Surveillance Consultant
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-brand-navy leading-snug">
              "We don't just sell security cameras; we design reliable protection for your family and investments."
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {storeConfig.owner.bio}
            </p>

            {/* Numbers & Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {storeConfig.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/90 text-center">
                  <span className="text-xl sm:text-2xl font-black text-brand-blue block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-600">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello Majid! I would like to consult with you directly regarding CCTV camera options and installation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat Directly with Majid</span>
              </a>

              <a
                href={`tel:${storeConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl border border-slate-300 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-brand-blue" />
                <span>Call {storeConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 hover:border-brand-blue/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                {getWhyIcon(item.iconName)}
              </div>
              <span className="text-[10px] font-black uppercase text-brand-blue tracking-wider block mb-1">
                {item.badge}
              </span>
              <h4 className="text-base font-bold text-brand-navy mb-2">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
