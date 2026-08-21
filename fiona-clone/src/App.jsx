import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionPage from './pages/TermsConditionPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ShippingPage from './pages/ShippingPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import FloatingCart from './components/FloatingCart';
import CartDrawer from './components/CartDrawer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="page-wrapper">
      <Header setIsCartOpen={setIsCartOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/order-tracking" element={<OrderTrackingPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Footer />
      <BottomNav setIsCartOpen={setIsCartOpen} />
      
      <FloatingCart setIsCartOpen={setIsCartOpen} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;
