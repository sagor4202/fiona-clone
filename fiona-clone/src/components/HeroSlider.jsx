import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { banners } from '../data/products';

export default function HeroSlider() {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="hero-slider"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.link}>
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
