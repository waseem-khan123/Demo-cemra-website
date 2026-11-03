import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { storeConfig } from '../../data/storeConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Majid CCTV Store! I have a question regarding CCTV cameras / installation services.'
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      {showTooltip && (
        <div className="absolute left-16 bottom-2 bg-brand-navy text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-slate-700 whitespace-nowrap hidden sm:flex items-center gap-2 animate-fade-in">
          <span>Chat with Majid on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="flex items-center justify-center w-13 h-13 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-emerald-400/30"
        title="Chat on WhatsApp"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </div>
  );
};
