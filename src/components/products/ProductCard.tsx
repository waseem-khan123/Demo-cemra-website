import React, { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { formatPKR } from '../../data/storeConfig';
import { 
  ShoppingCart, 
  Eye, 
  Star, 
  ShieldCheck, 
  Camera, 
  Check
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setSelectedProductForDetail } = useCart();
  const [imageError, setImageError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between">
      
      {/* Product Image Area */}
      <div className="relative h-56 w-full bg-slate-900 overflow-hidden flex items-center justify-center">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-brand-navyDark p-4 text-slate-300 text-center">
            <Camera className="w-10 h-10 text-brand-blue mb-2" />
            <span className="text-xs font-semibold text-white">{product.name}</span>
          </div>
        )}

        {/* Gradient Bottom Shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.isNew && (
            <span className="bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
              NEW
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-brand-blue text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
              FEATURED
            </span>
          )}
        </div>

        {/* Quick View Button overlay */}
        <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => setSelectedProductForDetail(product)}
            className="bg-white/95 hover:bg-white text-brand-navy text-xs font-bold px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform"
          >
            <Eye className="w-4 h-4 text-brand-blue" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Stock Status Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-brand-navy/90 backdrop-blur-md border border-slate-700/60 text-slate-200 text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>{product.stockStatus}</span>
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-3">
        <div>
          {/* Rating & Reviews */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
              {product.category.replace('-', ' ')}
            </span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => setSelectedProductForDetail(product)}
            className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-1 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-slate-500 text-xs line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Spec chips */}
          <div className="flex flex-wrap gap-1 mt-2.5">
            {product.specs.resolution && (
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium border border-slate-200">
                {product.specs.resolution}
              </span>
            )}
            {product.specs.nightVision && (
              <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium border border-slate-200">
                {product.specs.nightVision}
              </span>
            )}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          
          {/* Price line with Demo Indicator */}
          <div className="flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-extrabold text-brand-navy">
                  {formatPKR(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    {formatPKR(product.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-brand-blue font-semibold uppercase tracking-wider">
                Demo Sample Price
              </span>
            </div>
          </div>

          {/* Action Buttons: View Details & Add to Cart */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => setSelectedProductForDetail(product)}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>

            <button
              onClick={handleAddToCart}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-95 ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-brand-blue hover:bg-brand-blueHover text-white'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
