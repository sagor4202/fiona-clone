import { bentoBanners } from '../data/products';
import { Link } from 'react-router-dom';

export default function BentoBanner() {
  return (
    <section className="section bento-section">
      <div className="container">
        <div className="bento-grid">
          {/* Large main banner */}
          <div className="bento-main">
            <Link to="/shop" className="bento-card">
              <img src={bentoBanners[0].image} alt="Banner 1" loading="lazy" />
            </Link>
          </div>
          {/* Side banners */}
          <div className="bento-side">
            <div className="bento-side-top">
              <Link to="/shop" className="bento-card">
                <img src={bentoBanners[1].image} alt="Banner 2" loading="lazy" />
              </Link>
              <Link to="/shop" className="bento-card">
                <img src={bentoBanners[2].image} alt="Banner 3" loading="lazy" />
              </Link>
            </div>
            <div className="bento-side-bottom">
              <Link to="/shop" className="bento-card">
                <img src={bentoBanners[3].image} alt="Banner 4" loading="lazy" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
