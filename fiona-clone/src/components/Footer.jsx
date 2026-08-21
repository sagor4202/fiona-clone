import { Link } from 'react-router-dom';
import { logo } from '../data/products';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaFacebookMessenger, FaWhatsapp, FaCcVisa, FaCcMastercard, FaCcPaypal, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#333333', color: '#fff', paddingTop: '60px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.5fr', gap: '30px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          
          {/* Column 1: Logo & Contact */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img src={logo} alt="Fiona" style={{ filter: 'brightness(0) invert(1)', height: '40px' }} />
            </div>
            <p style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Affordable Luxury!</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', fontSize: '13px', color: '#ccc' }}>
                <FiMapPin size={16} color="#fff" />
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', fontSize: '13px', color: '#ccc' }}>
                <FiPhone size={16} color="#fff" /> +8801841990151
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#ccc' }}>
                <FiMail size={16} color="#fff" /> fiona.ecom@gmail.com
              </li>
            </ul>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[FaFacebookF, FaInstagram, FaYoutube, FaFacebookMessenger, FaWhatsapp].map((Icon, idx) => (
                <a key={idx} href="#" style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#333', textDecoration: 'none' }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['About us', 'Contact us', 'Terms and Conditions', 'Privacy Policy', 'Shipping Policy', 'Return & Refund Policy'].map(item => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <Link to="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px' }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Accounts */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Accounts</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['My account', 'My orders', 'My wishlist', 'Payment history', 'Support ticket', 'Order Tracking'].map(item => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <Link to="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: '13px' }}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Showroom Location */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Showroom Location</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Bashundhara City Outlet', 'Police Plaza Outlet'].map(item => (
                <li key={item} style={{ marginBottom: '12px' }}>
                  <span style={{ color: '#ccc', fontSize: '13px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>Sign Up Newsletter</h4>
            <p style={{ fontSize: '12px', color: '#ccc', marginBottom: '15px' }}>Don't worry, we won't spam you!</p>
            <div style={{ display: 'flex', marginBottom: '30px' }}>
              <input type="email" placeholder="Type Your E-mail" style={{ flex: 1, padding: '10px 15px', border: 'none', borderRadius: '4px 0 0 4px', fontSize: '13px', outline: 'none' }} />
              <button style={{ padding: '0 15px', background: '#FFC107', border: 'none', borderRadius: '0 4px 4px 0', color: '#333', cursor: 'pointer' }}>
                <FaArrowRight />
              </button>
            </div>
            <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Download App on Mobile :</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{ height: '32px' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{ height: '32px' }} />
            </div>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
          <div>
            <p style={{ margin: 0, fontSize: '13px', color: '#ccc' }}>Copyright © {new Date().getFullYear()} Fiona</p>
            <p style={{ margin: 0, fontSize: '13px', color: '#ccc' }}>Developed by <span style={{ color: '#FFC107' }}>Tech 2 Service</span></p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '13px', color: '#ccc', fontWeight: 'bold' }}>Pay With</span>
            <div style={{ display: 'flex', gap: '5px', background: '#fff', padding: '4px 8px', borderRadius: '4px' }}>
              <FaCcVisa size={24} color="#1a1f71" />
              <FaCcMastercard size={24} color="#eb001b" />
              <FaCcPaypal size={24} color="#00457c" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
