import { brands } from '../data/products';

export default function BrandSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Brands</h2>
          <a href="#" className="view-all">See all</a>
        </div>
        <div className="brands-grid">
          {brands.map((brand) => (
            <a href={brand.link} key={brand.id} className="brand-card">
              <img src={brand.image} alt={brand.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
