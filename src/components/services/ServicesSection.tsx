import React from 'react';
import { 
  Home, 
  Store, 
  Building2, 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { installationTiers, installationProcessSteps } from '../../data/services';
import { storeConfig } from '../../data/storeConfig';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-brand-blue" />;
      case 'Store':
        return <Store className="w-6 h-6 text-brand-blue" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-brand-blue" />;
      case 'Factory':
        return <Factory className="w-6 h-6 text-brand-blue" />;
      default:
        return <Wrench className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="installation" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/20 text-brand-accent text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Turnkey CCTV Installation</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Professional CCTV Camera Installation Packages
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            From single-room smart Wi-Fi cameras to enterprise multi-floor commercial IP security, our certified technicians ensure tidy concealed cabling and zero camera blind spots.
          </p>
        </div>

        {/* Installation Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {installationTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border relative ${
                tier.popular
                  ? 'bg-gradient-to-b from-brand-navyLight to-brand-navy border-brand-accent shadow-xl shadow-brand-blue/20 ring-1 ring-brand-accent/50'
                  : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow">
                  Most Popular
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-700/60 flex items-center justify-center mb-4">
                  {getIcon(tier.iconName)}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{tier.title}</h3>
                <span className="text-xs font-semibold text-brand-accent block mb-2">
                  Recommended: {tier.cameraRange}
                </span>
                <p className="text-xs text-slate-300 mb-4">{tier.tagline}</p>

                <div className="border-t border-slate-700/60 pt-3 space-y-2 mb-6">
                  {tier.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hello Majid CCTV Store! I am interested in inquiring about the "${tier.title}" (${tier.cameraRange}) installation package.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors ${
                  tier.popular
                    ? 'bg-brand-blue hover:bg-brand-blueHover text-white shadow-md'
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                }`}
              >
                <span>Book Site Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* 4-Step Installation Process */}
        <div className="bg-slate-800/60 rounded-3xl p-8 border border-slate-700/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              How Our Installation Works
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Simple 4-step deployment handled completely by our in-house team
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationProcessSteps.map((step, idx) => (
              <div key={idx} className="relative text-center sm:text-left space-y-2">
                <span className="text-3xl font-black text-brand-blue/50 font-mono block">
                  {step.step}
                </span>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Consultation CTA */}
          <div className="mt-10 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base">
                Have a customized site or need immediate inspection?
              </h4>
              <p className="text-xs text-slate-400">
                Talk directly with Majid for advice on camera angles, storage size, and wire safety.
              </p>
            </div>
            <a
              href={`https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Majid CCTV Store! I would like to schedule a free site survey for my premises.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-xl shrink-0 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Talk with Majid on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
