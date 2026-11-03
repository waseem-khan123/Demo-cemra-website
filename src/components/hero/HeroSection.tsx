import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Camera, 
  HardDrive, 
  Smartphone,
  Award
} from 'lucide-react';
import { storeConfig } from '../../data/storeConfig';

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative bg-gradient-to-b from-brand-navy via-brand-navyDark to-slate-900 text-white overflow-hidden py-12 lg:py-20">
      {/* Background Subtle Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Small Label Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/40 text-brand-accent text-xs font-semibold tracking-wider uppercase shadow-inner">
              <ShieldCheck className="w-4 h-4 text-brand-accent animate-pulse" />
              <span>YOUR TRUSTED SECURITY PARTNER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Protect What Matters Most with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Smart Security Solutions
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Majid CCTV Store delivers high-definition CCTV security cameras, hybrid DVRs, 4K NVRs, and complete turnkey installation services for homes, retail shops, and commercial offices across Pakistan.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-blue hover:bg-brand-blueHover text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-brand-blue/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-slate-700 font-semibold px-7 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="w-4 h-4 text-brand-accent" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Feature Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800 text-left">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>4K Ultra HD</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Mobile App Live View</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Weatherproof IP67</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Free Site Survey</span>
              </div>
            </div>

          </div>

          {/* Right Column: Majid - Business Owner Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative glow and border frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-blue to-sky-400 rounded-3xl blur-md opacity-30"></div>
              
              <div className="relative rounded-3xl overflow-hidden bg-brand-navyLight border border-slate-700 shadow-premium">
                
                {/* Owner Photo with Showroom Ambient */}
                <div className="relative h-96 sm:h-[420px] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src={storeConfig.owner.photoPlaceholder}
                      alt="Majid - Owner of Majid CCTV Store in security showroom"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    // Graceful fallback SVG/Showroom Illustration if external network is blocked
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-brand-navy to-slate-800 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-24 h-24 rounded-full bg-brand-blue/20 border-2 border-brand-blue flex items-center justify-center mb-4">
                        <Award className="w-12 h-12 text-brand-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">Majid</h3>
                      <p className="text-sm text-brand-accent mb-3">{storeConfig.owner.title}</p>
                      <p className="text-xs text-slate-400 max-w-xs">
                        Photo Placeholder: Ready to replace with Majid's actual photograph at <code className="text-slate-200">public/images/majid-owner.jpg</code>
                      </p>
                    </div>
                  )}

                  {/* Gradient Overlay for seamless readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent"></div>

                  {/* Top-Right Owner Experience Badge */}
                  <div className="absolute top-4 right-4 bg-brand-navy/90 backdrop-blur-md border border-slate-700 px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>10+ Yrs Security Expert</span>
                  </div>

                  {/* Floating Micro Feature: 24/7 Monitoring */}
                  <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-[11px] font-semibold text-slate-200">
                    <Smartphone className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Live Phone View</span>
                  </div>
                </div>

                {/* Bottom Card Information Bar */}
                <div className="p-5 bg-gradient-to-b from-brand-navyLight to-brand-navy border-t border-slate-700/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-white">{storeConfig.owner.name}</h2>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-semibold uppercase tracking-wider">
                          Owner
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-medium">
                        {storeConfig.owner.title}
                      </p>
                    </div>
                    
                    {/* CCTV camera mini badge */}
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-brand-accent" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mt-2.5 line-clamp-2">
                    "We do not just sell cameras — we engineer security solutions tailored to your property, guaranteeing crisp footage and seamless mobile access."
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
