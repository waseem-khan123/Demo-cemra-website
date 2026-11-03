import React from 'react';
import { 
  X, 
  Trash2, 
  ShoppingCart, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPKR, generateWhatsAppOrderUrl } from '../../data/storeConfig';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    totalAmount, 
    totalItems,
    setIsCheckoutModalOpen 
  } = useCart();

  if (!isCartOpen) return null;

  const whatsappOrderUrl = generateWhatsAppOrderUrl(
    items.map((i) => ({
      name: i.product.name,
      quantity: i.quantity,
      price: i.product.price,
    })),
    totalAmount
  );

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-brand-blue" />
              <h2 className="text-base sm:text-lg font-bold text-brand-navy">
                Shopping Cart ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg bg-slate-900 shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-red-500 p-0.5 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-[11px] text-slate-500 block">
                        {item.product.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex items-center justify-between mt-2 pt-1">
                      <span className="text-xs sm:text-sm font-bold text-brand-blue">
                        {formatPKR(item.product.price * item.quantity)}
                      </span>

                      <div className="flex items-center border border-slate-200 rounded-md bg-slate-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs font-bold text-slate-600 hover:bg-slate-200"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-semibold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-slate-600 hover:bg-slate-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-800">Your cart is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Browse our high-definition CCTV security cameras and add products to your cart.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 text-xs font-semibold text-brand-blue hover:underline"
                >
                  Continue Shopping →
                </button>
              </div>
            )}
          </div>

          {/* Footer Area */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              {/* Pricing breakdown */}
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal ({totalItems} items):</span>
                  <span className="font-semibold text-slate-800">{formatPKR(totalAmount)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Demo Delivery / Pickup:</span>
                  <span className="font-semibold text-emerald-600">Calculated on confirmation</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-brand-navy pt-2 border-t border-slate-200">
                  <span>Total Amount:</span>
                  <span className="text-brand-blue">{formatPKR(totalAmount)}</span>
                </div>
              </div>

              {/* Order Buttons */}
              <div className="space-y-2 pt-1">
                {/* 1-Click WhatsApp Order */}
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order via WhatsApp directly</span>
                </a>

                {/* Checkout Modal Button */}
                <button
                  onClick={handleCheckoutClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Online Checkout Form</span>
                </button>

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full text-center text-xs text-slate-400 hover:text-red-500 py-1 transition-colors"
                >
                  Clear all items
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
