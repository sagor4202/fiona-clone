import { logo, footerCategories } from '../data/products';
import { FaFacebookF, FaInstagram, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="Fiona" />
            </div>
            <p>
              Shop the latest trends at Fiona, your go-to destination for online shopping.
              Discover a wide range of products, from clothing to accessories, and enjoy
              a seamless shopping experience. Elevate your style with Fiona today.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Categories</h4>
            <ul className="footer-links">
              {footerCategories.slice(0, 8).map((cat, idx) => (
                <li key={idx}><a href="#">{cat}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-title">Newsletter</h4>
            <p>Subscribe to our newsletter to get the latest updates on new products and offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </div>
            <div style={{ marginTop: 20 }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>
                <strong>Got Questions?</strong>
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                +8801841990151
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                info@fionabd.com
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{'\u00A9'} 2024 Fiona. All Rights Reserved.</p>
          <div className="footer-payments">
            <span><FaCcVisa size={24} /></span>
            <span><FaCcMastercard size={24} /></span>
            <span><FaCcPaypal size={24} /></span>
            <span>Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
