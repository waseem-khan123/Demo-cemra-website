import React, { useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  Eye, 
  Maximize2, 
  Wifi, 
  HardDrive, 
  Cable, 
  Cpu 
} from 'lucide-react';
import { categories } from '../../data/categories';
import { useCart } from '../../context/CartContext';

export const CategoriesSection: React.FC = () => {
  const { handleCategorySelect } = useCart();
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-brand-blue" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-brand-blue" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-brand-blue" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5 text-brand-blue" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-brand-blue" />;
      case 'Cable':
        return <Cable className="w-5 h-5 text-brand-blue" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-24 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-100/70 px-3 py-1 rounded-full">
            Product Categories
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy mt-3 tracking-tight">
            Explore Our Comprehensive CCTV Range
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            From precision bullet cameras to enterprise NVR storage, select a category below to filter our available demo inventory.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const isImageFailed = failedImages[category.id];

            return (
              <div
                key={category.id}
                onClick={() => handleCategorySelect(category.slug)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Category Image Header */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  {!isImageFailed ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      onError={() => handleImageError(category.id)}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-brand-navyDark text-slate-300">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-2">
                        {getIcon(category.iconName)}
                      </div>
                      <span className="text-xs font-semibold">{category.name}</span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>

                  {/* Product Count Pill */}
                  <div className="absolute top-3 right-3 bg-brand-navy/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-700/60 shadow">
                    {category.itemCount} Items
                  </div>

                  {/* Category Title on Image */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/95 flex items-center justify-center shadow">
                      {getIcon(category.iconName)}
                    </div>
                    <h3 className="text-white font-bold text-lg drop-shadow-md">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-brand-blue group-hover:text-brand-blueHover">
                    <span>View Products</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
