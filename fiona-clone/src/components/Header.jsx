import { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiNavigation, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { logo, oMenCategories } from '../data/products';

export default function Header({ setIsCartOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Convert categories to menu items format
  const menuItems = oMenCategories ? oMenCategories.map(cat => ({
    label: cat.name.toUpperCase(),
    link: cat.link
  })) : [];

  return (
    <header className="header">
      {/* Header Middle */}
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button
              className="mobile-menu-toggle custom-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : (
                <div className="luxury-menu-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </button>
            <Link to="/" className="logo">
              <img src={logo} alt="Fiona" />
            </Link>
          </div>

          <div className="header-searchbar">
            <div className="search-form">
              <input type="text" placeholder="Search in..." />
              <button><FiSearch /></button>
            </div>
          </div>

          <div className="header-right">
            <Link to="/order-tracking" className="header-action">
              <FiNavigation size={20} />
              <span>Track Order</span>
            </Link>
            <Link to="/signin" className="header-action">
              <FiUser size={20} />
              <span>Sign In</span>
            </Link>
            <Link to="/wishlist" className="header-action">
              <FiHeart size={20} />
              <span>Wishlist</span>
            </Link>
            <button onClick={() => setIsCartOpen(true)} className="header-action" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
              <div style={{ position: 'relative' }}>
                <FiShoppingCart size={20} />
                <span className="cart-count">0</span>
              </div>
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header Bottom / Navigation */}
      <div className="header-bottom">
        <div className="container">
          <div className="sticky-logo">
            <Link to="/" className="logo">
              <img src={logo} alt="Fiona" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul className="menu">
              {menuItems.map((item, idx) => (
                <li key={idx} className={item.children ? 'has-submenu' : ''}>
                  {item.link.startsWith('/') ? (
                    <Link to={item.link}>{item.label}</Link>
                  ) : (
                    <a href={item.link}>{item.label}</a>
                  )}
                  {item.children && (
                    <ul className="submenu">
                      {item.children.map((child, cIdx) => (
                        <li key={cIdx} className={child.children ? 'has-submenu' : ''}>
                          {child.link.startsWith('/') ? (
                            <Link to={child.link}>{child.label}</Link>
                          ) : (
                            <a href={child.link}>{child.label}</a>
                          )}
                          {child.children && (
                            <ul className="submenu">
                              {child.children.map((sub, sIdx) => (
                                <li key={sIdx}>
                                  {sub.link.startsWith('/') ? (
                                    <Link to={sub.link}>{sub.label}</Link>
                                  ) : (
                                    <a href={sub.link}>{sub.label}</a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)', zIndex: 998
        }} onClick={() => setMobileMenuOpen(false)} />
      )}
      <div className="mobile-sidebar" style={{
        position: 'fixed', top: 0, left: mobileMenuOpen ? 0 : '-300px',
        width: 280, height: '100vh', background: '#fff', zIndex: 999,
        overflowY: 'auto', transition: 'left 0.3s ease', padding: '20px',
        boxShadow: mobileMenuOpen ? '4px 0 20px rgba(0,0,0,0.2)' : 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <img src={logo} alt="Fiona" style={{ height: 35 }} />
          <button onClick={() => setMobileMenuOpen(false)} style={{
            background: 'none', border: 'none', fontSize: 22, cursor: 'pointer'
          }}><FiX /></button>
        </div>
        {menuItems.map((item, idx) => (
          <div key={idx} style={{ borderBottom: '1px solid #eee' }}>
            {item.link.startsWith('/') ? (
              <Link to={item.link} onClick={() => setMobileMenuOpen(false)} style={{
                display: 'block', padding: '12px 0', fontSize: 14, fontWeight: 600,
                color: '#222831'
              }}>{item.label}</Link>
            ) : (
              <a href={item.link} onClick={() => setMobileMenuOpen(false)} style={{
                display: 'block', padding: '12px 0', fontSize: 14, fontWeight: 600,
                color: '#222831'
              }}>{item.label}</a>
            )}
          </div>
        ))}
      </div>
    </header>
  );
}
