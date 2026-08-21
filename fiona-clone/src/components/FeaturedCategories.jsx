import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { oMenCategories } from '../data/products';

export default function FeaturedCategories() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Categories</h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="featured-categories-carousel"
          style={{ padding: '10px 0' }}
        >
          {oMenCategories && oMenCategories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <a href={cat.link} className="category-card" style={{ display: 'block' }}>
                <img src={cat.image} alt={cat.name} />
                <h3>{cat.name}</h3>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
