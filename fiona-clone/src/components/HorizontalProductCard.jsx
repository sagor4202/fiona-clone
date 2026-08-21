import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';

function getBadgeClass(badge) {
  if (!badge) return '';
  const lower = badge.toLowerCase();
  if (lower.includes('offer')) return 'badge-offer';
  if (lower.includes('new')) return 'badge-new';
  if (lower.includes('trend')) return 'badge-trending';
  if (lower.includes('flag')) return 'badge-flag';
  return 'badge-offer';
}

export default function HorizontalProductCard({ product }) {
  const savings = product.originalPrice - product.price;

  return (
    <div className="horizontal-product-card">
      <div className="horizontal-product-image">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>
      </div>
      <div className="horizontal-product-body">
        <div className="horizontal-badge-container">
          {product.badge && (
            <span className={`badge ${getBadgeClass(product.badge)}`}>{product.badge}</span>
          )}
        </div>
        <h4 className="horizontal-product-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h4>
        <div className="horizontal-product-price">
          <span className="price-current">{formatPrice(product.price)}</span>
          <span className="price-original">{formatPrice(product.originalPrice)}</span>
        </div>
        {savings > 0 && (
          <div className="horizontal-save-container">
            <span className="horizontal-save-badge">Save {formatPrice(savings)}</span>
          </div>
        )}
        <button className="horizontal-product-btn">
          <FiShoppingBag size={14} /> Order Now
        </button>
      </div>
    </div>
  );
}
