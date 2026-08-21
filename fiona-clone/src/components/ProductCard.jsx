import { FiHeart, FiShoppingBag } from 'react-icons/fi';
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

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-badge">
          {product.badge && (
            <span className={`badge ${getBadgeClass(product.badge)}`}>{product.badge}</span>
          )}
        </div>
        {product.savePercent > 0 && (
          <span className="save-badge">Save {product.savePercent}%</span>
        )}
        <div className="product-wishlist">
          <FiHeart size={16} />
        </div>
      </div>
      <div className="product-card-body">
        <h4 className="product-card-title">
          <a href={product.link}>{product.name}</a>
        </h4>
        <div className="product-card-price">
          <span className="price-current">{formatPrice(product.price)}</span>
          <span className="price-original">{formatPrice(product.originalPrice)}</span>
        </div>
        <button className="product-card-btn">
          <FiShoppingBag size={14} /> Order Now
        </button>
      </div>
    </div>
  );
}
