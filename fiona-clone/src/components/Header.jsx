import { useState, useRef, useEffect } from 'react';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiNavigation, FiMenu, FiX } from 'react-icons/fi';
import { logo, navMenuItems } from '../data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  return (
    <header className="header">
      {/* Header Middle */}
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <a href="/" className="logo">
              <img src={logo} alt="Fiona" />
            </a>
          </div>

          <div className="header-searchbar">
            <div className="search-form">
              <input type="text" placeholder="Search in..." />
              <button><FiSearch /></button>
            </div>
          </div>

          <div className="header-right">
            <a href="#" className="header-action">
              <FiNavigation size={20} />
              <span>Track Order</span>
            </a>
            <a href="#" className="header-action">
              <FiUser size={20} />
              <span>Sign In</span>
            </a>
            <a href="#" className="header-action">
              <FiHeart size={20} />
              <span>Wishlist</span>
            </a>
            <a href="#" className="header-action">
              <div style={{ position: 'relative' }}>
                <FiShoppingCart size={20} />
                <span className="cart-count">0</span>
              </div>
              <span>Cart</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header Bottom / Navigation */}
      <div className="header-bottom">
        <div className="container">
          <div className="sticky-logo">
            <a href="/" className="logo">
              <img src={logo} alt="Fiona" />
            </a>
          </div>
          <nav className="main-nav">
            <ul className="menu">
              {navMenuItems.map((item, idx) => (
                <li key={idx} className={item.children ? 'has-submenu' : ''}>
                  <a href={item.link}>{item.label}</a>
                  {item.children && (
                    <ul className="submenu">
                      {item.children.map((child, cIdx) => (
                        <li key={cIdx} className={child.children ? 'has-submenu' : ''}>
                          <a href={child.link}>{child.label}</a>
                          {child.children && (
                            <ul className="submenu">
                              {child.children.map((sub, sIdx) => (
                                <li key={sIdx}>
                                  <a href={sub.link}>{sub.label}</a>
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
        {navMenuItems.map((item, idx) => (
          <div key={idx} style={{ borderBottom: '1px solid #eee' }}>
            <a href={item.link} style={{
              display: 'block', padding: '12px 0', fontSize: 14, fontWeight: 600,
              color: '#222831'
            }}>{item.label}</a>
          </div>
        ))}
      </div>
    </header>
  );
}
