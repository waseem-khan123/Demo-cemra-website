import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { CategoriesSection } from './components/categories/CategoriesSection';
import { ProductsSection } from './components/products/ProductsSection';
import { ServicesSection } from './components/services/ServicesSection';
import { AboutOwnerSection } from './components/about/AboutOwnerSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { ProductModal } from './components/products/ProductModal';
import { CheckoutModal } from './components/cart/CheckoutModal';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { Toast } from './components/common/Toast';

export function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Promotional Banner */}
          <HeroSection />

          {/* Product Category Cards */}
          <CategoriesSection />

          {/* Product Catalog Grid & Search */}
          <ProductsSection />

          {/* CCTV Installation & Packages */}
          <ServicesSection />

          {/* Owner Profile & Why Choose Us */}
          <AboutOwnerSection />

          {/* Contact Details & Inquiry Form */}
          <ContactSection />
        </main>

        {/* Global Modals & Drawers */}
        <CartDrawer />
        <ProductModal />
        <CheckoutModal />

        {/* Floating Widgets */}
        <WhatsAppButton />
        <Toast />

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
