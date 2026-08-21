import { useState } from 'react';
import { menTabProducts, premiumPanjabi, cubanShirts, kidsProducts } from '../data/products';
import ProductCard from './ProductCard';

const tabs = [
  { label: 'MEN', products: menTabProducts },
  { label: 'PANJABI', products: premiumPanjabi },
  { label: 'ELEGANT EDITION PANJABI', products: premiumPanjabi },
  { label: 'CLASSIC EDITION PANJABI', products: kidsProducts },
];

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section tab-section">
      <div className="container">
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
