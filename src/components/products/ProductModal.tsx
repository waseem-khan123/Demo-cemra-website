import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  Camera, 
  Check, 
  CheckCircle2, 
  Info,
  Clock,
  Wrench
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPKR, storeConfig } from '../../data/storeConfig';

export const ProductModal: React.FC = () => {
  const { selectedProductForDetail, setSelectedProductForDetail, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!selectedProductForDetail) return null;

  const product = selectedProductForDetail;

  const handleClose = () => {
    setSelectedProductForDetail(null);
    setQuantity(1);
    setImageError(false);
    setAddedSuccess(false);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 1500);
  };

  const whatsappInquiryUrl = `https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Majid CCTV Store! I am interested in inquiring about/purchasing this camera:\n\n*Product:* ${product.name}\n*Price:* ${formatPKR(product.price)}\n*Quantity:* ${quantity}\n\nPlease share availability and installation options.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Media Column */}
          <div className="relative bg-slate-900 flex flex-col items-center justify-center min-h-[260px] md:min-h-full p-6">
            {!imageError ? (
              <img
                src={product.image}
                alt={product.name}
                onError={() => setImageError(true)}
                className="w-full max-h-80 object-cover rounded-xl shadow-lg"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-300 py-12">
                <Camera className="w-16 h-16 text-brand-blue mb-3" />
                <span className="font-semibold text-white">{product.name}</span>
              </div>
            )}

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <span className="bg-brand-blue text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow">
                {product.category.replace('-', ' ').toUpperCase()}
              </span>
              <span className="bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow">
                {product.stockStatus}
              </span>
            </div>
          </div>

          {/* Product Details Column */}
          <div className="p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div className="space-y-4">
              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold ml-1 text-slate-800">{product.rating}</span>
                </div>
                <span>•</span>
                <span>{product.reviewsCount} verified customer reviews</span>
              </div>

              {/* Product Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-blue">
                  {formatPKR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-base text-slate-400 line-through">
                    {formatPKR(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Save {formatPKR((product.originalPrice || product.price) - product.price)}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.fullDescription || product.shortDescription}
              </p>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Specifications Sheet */}
              {product.specs && Object.keys(product.specs).length > 0 && (
                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    {product.specs.resolution && (
                      <div>
                        <span className="text-slate-400 block">Resolution:</span>
                        <span className="font-semibold text-slate-800">{product.specs.resolution}</span>
                      </div>
                    )}
                    {product.specs.lens && (
                      <div>
                        <span className="text-slate-400 block">Lens / FOV:</span>
                        <span className="font-semibold text-slate-800">{product.specs.lens}</span>
                      </div>
                    )}
                    {product.specs.nightVision && (
                      <div>
                        <span className="text-slate-400 block">Night Vision:</span>
                        <span className="font-semibold text-slate-800">{product.specs.nightVision}</span>
                      </div>
                    )}
                    {product.specs.weatherproof && (
                      <div>
                        <span className="text-slate-400 block">Protection:</span>
                        <span className="font-semibold text-slate-800">{product.specs.weatherproof}</span>
                      </div>
                    )}
                    {product.specs.connectivity && (
                      <div>
                        <span className="text-slate-400 block">Connectivity:</span>
                        <span className="font-semibold text-slate-800">{product.specs.connectivity}</span>
                      </div>
                    )}
                    {product.specs.warranty && (
                      <div>
                        <span className="text-slate-400 block">Warranty:</span>
                        <span className="font-semibold text-slate-800">{product.specs.warranty}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Actions & Quantity Footer */}
            <div className="pt-6 border-t border-slate-200 space-y-3 mt-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-600">Quantity:</span>
                <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-sm font-semibold text-slate-800 min-w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md ${
                    addedSuccess
                      ? 'bg-emerald-600 text-white'
                      : 'bg-brand-blue hover:bg-brand-blueHover text-white'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Buy on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
