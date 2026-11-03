import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2, Info } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 animate-bounce">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-white backdrop-blur-md border ${
          toast.type === 'success'
            ? 'bg-brand-navy/95 border-brand-blue/50'
            : 'bg-slate-900/95 border-slate-700'
        }`}
      >
        {toast.type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : (
          <Info className="w-5 h-5 text-sky-400 shrink-0" />
        )}
        <span className="text-sm font-medium pr-2">{toast.message}</span>
      </div>
    </div>
  );
};
