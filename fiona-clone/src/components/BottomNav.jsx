import { FiHome, FiSearch, FiShoppingCart, FiUser, FiHeart } from 'react-icons/fi';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-list">
        <a href="/" className="bottom-nav-item active">
          <FiHome size={20} />
          <span>Home</span>
        </a>
        <a href="#" className="bottom-nav-item">
          <FiSearch size={20} />
          <span>Search</span>
        </a>
        <a href="#" className="bottom-nav-item">
          <FiShoppingCart size={20} />
          <span>Cart</span>
        </a>
        <a href="#" className="bottom-nav-item">
          <FiHeart size={20} />
          <span>Wishlist</span>
        </a>
        <a href="#" className="bottom-nav-item">
          <FiUser size={20} />
          <span>Account</span>
        </a>
      </div>
    </nav>
  );
}
