import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const OverlayText = () => (
  <div className="hero-overlay" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '8%', color: '#333', maxWidth: '400px' }}>
    <h4 style={{ fontSize: '20px', marginBottom: '5px', fontWeight: '600' }}>ফিওনাতে চলছে</h4>
    <h2 style={{ fontSize: '60px', fontWeight: '900', color: '#a67c00', lineHeight: '1', margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>ধামাকা</h2>
    <h2 style={{ fontSize: '60px', fontWeight: '900', color: '#111', lineHeight: '1', margin: '0 0 15px 0', borderBottom: '6px solid #111', display: 'inline-block', paddingBottom: '5px' }}>অফার!</h2>
    
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
      <span style={{ fontSize: '80px', fontWeight: '900', color: '#a67c00', lineHeight: '1' }}>70%</span>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>পর্যন্ত</span>
        <span style={{ fontSize: '32px', fontWeight: '900' }}>ছাড়!</span>
      </div>
    </div>
    
    <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#222', color: '#fff', padding: '15px 30px', borderRadius: '30px', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      এখনই শপ করুন
    </Link>
  </div>
);

export default function HeroSlider() {
  return (
    <section className="hero-section" style={{ width: '100%', overflow: 'hidden' }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="hero-slider"
      >
        {/* Slide 1: Original Uploaded Banner */}
        <SwiperSlide>
          <Link to="/shop" style={{ display: 'block', width: '100%' }}>
            <img
              src="/images/hero_dhamaka.jpg"
              alt="Dhamaka Offer Banner"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Link>
        </SwiperSlide>
        
        {/* Slide 2: Ladies Shoes with CSS overlay */}
        <SwiperSlide style={{ position: 'relative' }}>
          <img
            src="/images/hero_ladies_shoes.jpg"
            alt="Ladies Shoes Offer"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <OverlayText />
        </SwiperSlide>
        
        {/* Slide 3: Ladies Bags with CSS overlay */}
        <SwiperSlide style={{ position: 'relative' }}>
          <img
            src="/images/hero_ladies_bags.jpg"
            alt="Ladies Bags Offer"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <OverlayText />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
