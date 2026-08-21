import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductSection({ title, subtitle, viewAllLink, products, columns = 4, isSlider = false }) {
  return (
    <section className="section">
      <div className="container">
        <div className="product-section-header">
          <div>
            <h2>
              {title}
              {subtitle && <span className="subtitle">{subtitle}</span>}
            </h2>
          </div>
          {viewAllLink && <Link to="/shop" className="view-all">View all</Link>}
        </div>
        {isSlider ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="product-carousel"
            style={{ padding: '10px 5px 40px' }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="product-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
