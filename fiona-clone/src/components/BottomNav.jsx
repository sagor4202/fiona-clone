import { FiHome, FiGrid, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function BottomNav({ setIsCartOpen }) {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-list">
        <Link to="/" className="bottom-nav-item active">
          <FiHome size={20} />
          <span>Home</span>
        </Link>
        <Link to="/shop" className="bottom-nav-item">
          <FiGrid size={20} />
          <span>Shop</span>
        </Link>
        <button onClick={() => setIsCartOpen(true)} className="bottom-nav-item" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}>
          <FiShoppingCart size={20} />
          <span>Cart</span>
        </button>
        <Link to="/order-tracking" className="bottom-nav-item">
          <FiUser size={20} />
          <span>Account</span>
        </Link>
      </div>
    </nav>
  );
}
