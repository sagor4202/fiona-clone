import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cubanShirts, premiumPanjabi, topSellingProducts, kidsProducts, formatPrice } from '../data/products';
import { FiShoppingBag, FiHeart, FiShare2, FiStar, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('specification');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  
  // Safe extraction of products
  const allProducts = [...(cubanShirts || []), ...(premiumPanjabi || []), ...(topSellingProducts || []), ...(kidsProducts || [])];
  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];
  const relatedProducts = allProducts.slice(0, 5);

  if (!product) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Product not found.</div>;

  return (
    <main className="product-details-page" style={{ padding: '20px 0', background: '#f5f5f5' }}>
      <div className="container">
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Link to="/" style={{ color: '#666' }}>Home</Link> <FiChevronRight size={12} /> 
          <Link to="/shop" style={{ color: '#666' }}>Products</Link> <FiChevronRight size={12} /> 
          <span style={{ color: 'var(--primary-color)' }}>{product.name}</span>
        </div>

        {/* Top Layout */}
        <div style={{ display: 'flex', gap: '30px', background: '#fff', padding: '30px', borderRadius: '4px', marginBottom: '30px' }}>
          
          {/* Left: Gallery */}
          <div style={{ flex: '0 0 45%' }}>
            {product.badge && <span className="badge badge-offer" style={{ position: 'absolute', margin: '10px', zIndex: 10 }}>{product.badge}</span>}
            <div style={{ width: '100%', background: '#f9f9f9', display: 'flex', justifyContent: 'center', border: '1px solid #eee' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} style={{ width: '80px', height: '80px', border: idx === 1 ? '2px solid var(--primary-color)' : '1px solid #eee', cursor: 'pointer' }}>
                  <img src={product.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Info */}
          <div style={{ flex: '1' }}>
            <h1 style={{ fontSize: '24px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>{product.name}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', color: '#ffb800' }}>
                <FiStar fill="#ffb800" /><FiStar fill="#ffb800" /><FiStar fill="#ffb800" /><FiStar fill="#ffb800" /><FiStar fill="#ffb800" />
              </div>
              <span style={{ color: '#28a745' }}>● In Stock</span>
              <FiHeart style={{ cursor: 'pointer', marginLeft: 'auto' }} size={20} color="#999" />
            </div>
            
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px' }}>
              Premium quality {product.name.toLowerCase()} featuring popcorn fabric for ultimate comfort. Designed to make you look stylish and elegant. Product color may slightly vary due to photographic lighting sources.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', padding: '15px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
              <span style={{ fontSize: '26px', fontWeight: '700', color: 'var(--primary-color)' }}>{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span style={{ fontSize: '16px', color: '#999', textDecoration: 'line-through' }}>{formatPrice(product.originalPrice)}</span>
                  <span style={{ background: '#b1d842', padding: '3px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>Save {product.savePercent}%</span>
                </>
              )}
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <strong style={{ display: 'block', marginBottom: '10px', fontSize: '14px' }}>Size</strong>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['M', 'L', 'XL', 'XXL'].map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    style={{ 
                      width: '45px', height: '40px', border: selectedSize === size ? '2px solid var(--primary-color)' : '1px solid #ddd', 
                      background: '#fff', cursor: 'pointer', borderRadius: '4px', fontWeight: selectedSize === size ? 'bold' : 'normal'
                    }}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '10px 15px', background: '#f9f9f9', border: 'none', borderRight: '1px solid #ddd', cursor: 'pointer' }}>-</button>
                <input type="text" value={quantity} readOnly style={{ width: '40px', textAlign: 'center', border: 'none', fontWeight: 'bold' }} />
                <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '10px 15px', background: '#f9f9f9', border: 'none', borderLeft: '1px solid #ddd', cursor: 'pointer' }}>+</button>
              </div>
              <span style={{ color: 'var(--primary-color)', fontSize: '14px', fontWeight: '600' }}>Size Guide</span>
            </div>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <button style={{ flex: 1, padding: '14px', background: 'var(--primary-color)', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                ADD TO CART
              </button>
              <button className="btn-buy-now" style={{ flex: 1, padding: '14px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}>
                BUY NOW
              </button>
            </div>
            
            <div style={{ marginTop: '15px' }}>
              <a href="https://wa.me/8801841990151" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%', padding: '14px', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: 'bold', transition: 'background 0.2s' }}>
                <FaWhatsapp size={20} /> Order via WhatsApp
              </a>
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '13px', color: '#666' }}>
              <strong>Share:</strong> 
              <FiShare2 size={16} style={{ marginLeft: '10px', cursor: 'pointer' }} />
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '4px', marginBottom: '30px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {['Specification', 'Description', 'Size Guide', 'Customer Reviews (0)'].map(tab => {
              const tabId = tab.toLowerCase().split(' ')[0];
              const isActive = activeTab === tabId;
              return (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tabId)}
                  style={{ 
                    padding: '12px 24px', 
                    background: isActive ? 'var(--primary-color)' : '#f5f5f5', 
                    border: 'none', 
                    borderRadius: '4px',
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: isActive ? '#fff' : '#666',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                  {tab}
                </button>
              );
            })}
          </div>
          
          <div style={{ padding: '10px 0' }}>
            {activeTab === 'specification' && (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', fontWeight: '600', color: '#333', width: '30%' }}>Brand</td>
                    <td style={{ padding: '15px', color: '#666' }}>FIONA</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', fontWeight: '600', color: '#333' }}>Product Code</td>
                    <td style={{ padding: '15px', color: '#666' }}>HW-2519</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', fontWeight: '600', color: '#333' }}>Color</td>
                    <td style={{ padding: '15px', color: '#666' }}>As given picture (Multicolor)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', fontWeight: '600', color: '#333' }}>Composition</td>
                    <td style={{ padding: '15px', color: '#666' }}>Cotton Blended Spandex</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', fontWeight: '600', color: '#333' }}>Sleeve</td>
                    <td style={{ padding: '15px', color: '#666' }}>Half Sleeve</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '15px', fontWeight: '600', color: '#333' }}>Fit</td>
                    <td style={{ padding: '15px', color: '#666' }}>Regular Smart Fit</td>
                  </tr>
                </tbody>
              </table>
            )}
            {activeTab === 'description' && <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>Product details for {product.name} are loaded here. This is a premium quality product.</div>}
            {activeTab === 'size' && (
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'center' }}>
                <thead style={{ background: '#f5f5f5' }}>
                  <tr>
                    <th style={{ padding: '12px', border: '1px solid #eee' }}>Size</th>
                    <th style={{ padding: '12px', border: '1px solid #eee' }}>Chest (Round)</th>
                    <th style={{ padding: '12px', border: '1px solid #eee' }}>Length (Body)</th>
                    <th style={{ padding: '12px', border: '1px solid #eee' }}>Sleeve Length</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '12px', border: '1px solid #eee' }}>M</td><td style={{ border: '1px solid #eee' }}>40</td><td style={{ border: '1px solid #eee' }}>28.5</td><td style={{ border: '1px solid #eee' }}>8.5</td></tr>
                  <tr><td style={{ padding: '12px', border: '1px solid #eee' }}>L</td><td style={{ border: '1px solid #eee' }}>42</td><td style={{ border: '1px solid #eee' }}>29</td><td style={{ border: '1px solid #eee' }}>9</td></tr>
                  <tr><td style={{ padding: '12px', border: '1px solid #eee' }}>XL</td><td style={{ border: '1px solid #eee' }}>44</td><td style={{ border: '1px solid #eee' }}>29.5</td><td style={{ border: '1px solid #eee' }}>9.5</td></tr>
                  <tr><td style={{ padding: '12px', border: '1px solid #eee' }}>XXL</td><td style={{ border: '1px solid #eee' }}>46</td><td style={{ border: '1px solid #eee' }}>30</td><td style={{ border: '1px solid #eee' }}>10</td></tr>
                </tbody>
              </table>
            )}
            {activeTab === 'customer' && (
              <div style={{ display: 'flex', gap: '50px' }}>
                <div style={{ flex: '0 0 30%', textAlign: 'center' }}>
                  <h1 style={{ fontSize: '48px', margin: '0', color: '#333' }}>0.0</h1>
                  <div style={{ color: '#ffb800', marginBottom: '10px' }}><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                  <p style={{ color: '#666', fontSize: '13px' }}>0 Ratings & 0 Reviews</p>
                </div>
                <div style={{ flex: '1', borderLeft: '1px solid #eee', paddingLeft: '50px' }}>
                  <h3 style={{ margin: '0 0 15px 0' }}>Rate this product</h3>
                  <p style={{ color: '#666', fontSize: '13px' }}>Tell others what you think about this product.</p>
                  <button style={{ padding: '10px 20px', background: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>Write a Review</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '20px', color: '#333', marginBottom: '20px', borderBottom: '1px solid var(--primary-color)', display: 'inline-block', paddingBottom: '5px' }}>Related Products</h2>
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
