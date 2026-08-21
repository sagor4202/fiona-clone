import { useState } from 'react';
import { featuredNewArrival, featuredTrending, featuredOffered, featuredBestSelling } from '../data/products';
import ProductCard from './ProductCard';

const tabs = [
  { label: 'New Arrival', products: featuredNewArrival },
  { label: 'Trending Items', products: featuredTrending },
  { label: 'Offered Items', products: featuredOffered },
  { label: 'Best Selling', products: featuredBestSelling },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section tab-section">
      <div className="container">
        <div className="product-section-header">
          <h2 className="section-title">Featured Products</h2>
        </div>
        <div className="tab-nav">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {tabs[activeTab].products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
