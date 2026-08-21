import { Link } from 'react-router-dom';

export default function HeroSlider() {
  return (
    <section className="hero-section" style={{ width: '100%', overflow: 'hidden' }}>
      <Link to="/shop" style={{ display: 'block', width: '100%' }}>
        <img
          src="/images/hero_dhamaka.jpg"
          alt="Dhamaka Offer Banner"
          style={{ 
            width: '100%', 
            height: 'auto', 
            display: 'block' 
          }}
        />
      </Link>
    </section>
  );
}
