import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Wallet, 
  Building, 
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPKR, storeConfig, generateWhatsAppOrderUrl } from '../../data/storeConfig';

export const CheckoutModal: React.FC = () => {
  const { 
    isCheckoutModalOpen, 
    setIsCheckoutModalOpen, 
    items, 
    totalAmount, 
    clearCart 
  } = useCart();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [address, setAddress] = useState('');
  const [needInstallation, setNeedInstallation] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'jazzcash' | 'bank'>('cod');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  if (!isCheckoutModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !address) {
      alert('Please fill in your name, phone, and complete delivery address.');
      return;
    }

    const randomId = 'MJD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setOrderPlaced(true);
  };

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(orderId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleFinish = () => {
    clearCart();
    setOrderPlaced(false);
    setIsCheckoutModalOpen(false);
    setFullName('');
    setPhone('');
    setAddress('');
  };

  const whatsappConfirmedUrl = orderPlaced
    ? `https://wa.me/${storeConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        `*Order Placed on Website! (Demo)*\n*Order ID:* ${orderId}\n*Customer:* ${fullName}\n*Phone:* ${phone}\n*City:* ${city}\n*Address:* ${address}\n*Installation Required:* ${
          needInstallation ? 'Yes' : 'No'
        }\n*Payment Method:* ${paymentMethod.toUpperCase()}\n*Total Amount:* ${formatPKR(
          totalAmount
        )}\n\nPlease confirm availability and dispatch schedule.`
      )}`
    : '';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-brand-navy">
              {orderPlaced ? 'Order Confirmation' : 'Complete Your Order'}
            </h3>
            <p className="text-xs text-slate-500">
              {orderPlaced ? 'Thank you for choosing Majid CCTV Store' : 'Quick delivery across Pakistan'}
            </p>
          </div>
          <button
            onClick={() => {
              if (orderPlaced) clearCart();
              setIsCheckoutModalOpen(false);
            }}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {!orderPlaced ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Order Items Preview */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                <div className="flex justify-between font-semibold text-slate-700 mb-1.5">
                  <span>Order Items ({items.length}):</span>
                  <span className="text-brand-blue font-bold">{formatPKR(totalAmount)}</span>
                </div>
                <div className="text-slate-500 max-h-20 overflow-y-auto space-y-1">
                  {items.map((i) => (
                    <div key={i.product.id} className="flex justify-between">
                      <span className="truncate pr-2">{i.quantity}x {i.product.name}</span>
                      <span className="shrink-0">{formatPKR(i.product.price * i.quantity)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Info Form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0300 1234567"
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Other">Other City</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House/Shop #, Street, Area/Sector"
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Installation Checkbox */}
              <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-200/80 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="installCheck"
                  checked={needInstallation}
                  onChange={(e) => setNeedInstallation(e.target.checked)}
                  className="w-4 h-4 text-brand-blue rounded border-slate-300 focus:ring-brand-blue"
                />
                <label htmlFor="installCheck" className="text-xs text-slate-700 select-none">
                  <span className="font-semibold text-brand-navy block">
                    I also need CCTV Technician Installation Service
                  </span>
                  Our technical team will call to schedule an on-site survey and cabling.
                </label>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Select Payment Option
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === 'cod'
                        ? 'border-brand-blue bg-blue-50/50 font-bold text-brand-navy'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-brand-blue"
                    />
                    <Truck className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Cash on Delivery</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === 'jazzcash'
                        ? 'border-brand-blue bg-blue-50/50 font-bold text-brand-navy'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'jazzcash'}
                      onChange={() => setPaymentMethod('jazzcash')}
                      className="text-brand-blue"
                    />
                    <Wallet className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>JazzCash / EasyPaisa</span>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === 'bank'
                        ? 'border-brand-blue bg-blue-50/50 font-bold text-brand-navy'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      className="text-brand-blue"
                    />
                    <Building className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Bank Transfer</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-blue hover:bg-brand-blueHover text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-brand-blue/30 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Place Demo Order ({formatPKR(totalAmount)})</span>
                </button>
              </div>
            </form>
          ) : (
            /* Order Placed Success View */
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-brand-navy">
                  Order Successfully Placed!
                </h3>
                <p className="text-xs text-slate-500">
                  Majid CCTV Store representative will contact you shortly to confirm delivery.
                </p>
              </div>

              {/* Order ID Box */}
              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 inline-flex items-center justify-between gap-4 max-w-sm w-full mx-auto">
                <div className="text-left">
                  <span className="text-[11px] text-slate-500 block uppercase tracking-wider font-semibold">
                    Order Reference ID
                  </span>
                  <span className="text-base font-extrabold text-brand-navy font-mono">
                    {orderId}
                  </span>
                </div>
                <button
                  onClick={handleCopyOrderId}
                  className="p-2 bg-white hover:bg-slate-200 rounded-lg text-slate-700 border border-slate-300 text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  {copiedId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Customer details summary */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Customer:</span>
                  <span className="font-semibold text-slate-800">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-semibold text-slate-800">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-semibold text-slate-800">{city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Payment:</span>
                  <span className="font-semibold text-slate-800 uppercase">{paymentMethod}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-1 font-bold text-brand-navy">
                  <span>Total Amount:</span>
                  <span className="text-brand-blue">{formatPKR(totalAmount)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 max-w-sm mx-auto pt-2">
                <a
                  href={whatsappConfirmedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Order to Owner on WhatsApp</span>
                </a>

                <button
                  onClick={handleFinish}
                  className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-2.5 px-4 rounded-xl transition-colors text-xs"
                >
                  Close & Back to Store
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
