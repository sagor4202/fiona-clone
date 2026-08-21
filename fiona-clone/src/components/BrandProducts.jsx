import { useState } from 'react';
import { autographProducts, fionaBrandProducts } from '../data/products';
import ProductCard from './ProductCard';

const tabs = [
  { label: 'THE AUTOGRAPH', products: autographProducts },
  { label: 'FIONA', products: fionaBrandProducts },
];

export default function BrandProducts() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section tab-section">
      <div className="container">
        <div className="product-section-header">
          <h2 className="section-title">Featured Brand Products</h2>
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
