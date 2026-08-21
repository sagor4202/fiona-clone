import { brands } from '../data/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

export default function BrandSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="brand-section-header">
          <h2 className="brand-section-title">Our Brands</h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={2}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="product-carousel"
          style={{ paddingBottom: '40px' }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <Link to="/shop" className="custom-brand-card">
                <img src={brand.image} alt={brand.name} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
