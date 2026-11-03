import React from 'react';
import { 
  ShieldCheck, 
  PhoneCall, 
  MessageCircle, 
  MapPin, 
  Clock, 
  ArrowUp,
  Camera
} from 'lucide-react';
import { storeConfig } from '../../data/storeConfig';
import { categories } from '../../data/categories';
import { useCart } from '../../context/CartContext';

export const Footer: React.FC = () => {
  const { handleCategorySelect } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navyDark text-slate-400 text-xs border-t border-slate-800">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                {storeConfig.brandName}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {storeConfig.shortBio}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={storeConfig.socials.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={`tel:${storeConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-blue text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Phone Call"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">CCTV Cameras</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Equipment Types</a>
              </li>
              <li>
                <a href="#installation" className="hover:text-white transition-colors">Installation Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Majid</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Equipment Categories
            </h4>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategorySelect(cat.slug)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Showroom Contact
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <span>{storeConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-brand-blue shrink-0" />
                <a href={`tel:${storeConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {storeConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0 fill-emerald-500" />
                <a href={storeConfig.socials.whatsappDirect} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {storeConfig.contact.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                <span>{storeConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} {storeConfig.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Website Demo Prototype</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
