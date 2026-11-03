import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ShoppingCart, 
  Menu, 
  X, 
  PhoneCall, 
  Search,
  Wrench
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { storeConfig } from '../../data/storeConfig';

export const Navbar: React.FC = () => {
  const { totalItems, setIsCartOpen, searchQuery, setSearchQuery } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Categories', href: '#categories' },
    { name: 'Installation', href: '#installation' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner with Demo Notice & Quick Info */}
      <div className="bg-brand-navyDark text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-brand-blue/20 text-brand-accent px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase">
              Demo Store
            </span>
            <span className="hidden md:inline text-slate-400">
              High-Definition Security Cameras & Professional Installation in Pakistan
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={`tel:${storeConfig.contact.phone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-blue" />
              <span>{storeConfig.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Shop Hours: 10AM - 8:30PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-brand-navyLight/60 py-3'
            : 'bg-brand-navy border-b border-brand-navyLight/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Majid CCTV Store Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-sky-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-tight flex items-center gap-1.5">
                  Majid <span className="text-brand-accent">CCTV</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">
                  Security Store
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-200 hover:text-brand-accent transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-accent hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons: Search, Cart, Shop Now */}
            <div className="flex items-center gap-3">
              {/* Search Toggle (Desktop & Mobile) */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                aria-label={`Shopping cart containing ${totalItems} items`}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-blue text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md ring-2 ring-brand-navy animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Shop Now CTA Button (Desktop) */}
              <a
                href="#products"
                className="hidden sm:inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:shadow-brand-blue/30 active:scale-95"
              >
                <span>Shop Now</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Search Dropdown Bar */}
          {isSearchOpen && (
            <div className="mt-3 pt-3 border-t border-brand-navyLight/60 animate-fade-in">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search cameras, DVR, NVR, cables, hard drives..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/90 text-white pl-10 pr-10 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm placeholder-slate-400"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Slide-down Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-brand-navyDark border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-200 hover:text-brand-accent hover:bg-white/5 px-3 py-2.5 rounded-lg text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-2">
              <a
                href="#products"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blueHover text-white py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Shop All Cameras</span>
              </a>

              <a
                href="#installation"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white py-2.5 rounded-xl font-medium text-sm transition-colors"
              >
                <Wrench className="w-4 h-4 text-brand-accent" />
                <span>Book CCTV Installation</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
