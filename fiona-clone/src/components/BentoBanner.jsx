import { bentoBanners } from '../data/products';

export default function BentoBanner() {
  return (
    <section className="section">
      <div className="container">
        <div className="bento-banner-grid">
          {bentoBanners.map((banner) => (
            <a href={banner.link} key={banner.id}>
              <img src={banner.image} alt={`Banner ${banner.id}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
