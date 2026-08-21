import { topSellingProducts } from '../data/products';
import HorizontalProductCard from './HorizontalProductCard';

export default function TopSelling() {
  return (
    <section className="section">
      <div className="container">
        <div className="product-section-header" style={{ justifyContent: 'center', marginBottom: '30px' }}>
          <h2 className="section-title">Top Selling Products</h2>
        </div>
        <div className="top-selling-grid">
          {topSellingProducts.map((product) => (
            <HorizontalProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
