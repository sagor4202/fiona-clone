import ProductCard from '../components/ProductCard';
import { cubanShirts, premiumPanjabi, topSellingProducts, kidsProducts } from '../data/products';

export default function ShopPage() {
  // Combine all mock products to simulate a full shop inventory
  const allProducts = [...(cubanShirts || []), ...(premiumPanjabi || []), ...(topSellingProducts || []), ...(kidsProducts || [])];
  // Deduplicate products based on ID (mock data might share IDs across sections)
  const uniqueProducts = Array.from(new Map(allProducts.filter(item => item && item.id).map(item => [item.id, item])).values());

  return (
    <main className="shop-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Shop All Products</h1>
        </div>
      </div>
      
      <div className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: '30px' }}>
            {/* Sidebar Filter */}
            <aside style={{ width: '260px', flexShrink: 0 }} className="shop-sidebar">
              <div className="content-box sidebar-content">
                
                {/* Product Flag */}
                <div className="sidebar-section">
                  <div className="sidebar-title">
                    <h4>PRODUCT FLAG</h4>
                    <span>-</span>
                  </div>
                  <div className="sidebar-options">
                    {['New Flag', 'Trending Items', 'Best Selling', 'Best Collection', 'New Arrival', 'Offered Items'].map(item => (
                      <label key={item} className="checkbox-label">
                        <input type="checkbox" />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="sidebar-section">
                  <div className="sidebar-title">
                    <h4>PRICE RANGE</h4>
                    <span>-</span>
                  </div>
                  <div className="price-range-labels">
                    <span>৳ 0</span>
                    <span>৳ 10,000</span>
                  </div>
                  <input type="range" min="0" max="10000" className="price-slider" />
                </div>

                {/* Size */}
                <div className="sidebar-section">
                  <div className="sidebar-title">
                    <h4>SIZE</h4>
                    <span>-</span>
                  </div>
                  <div className="size-grid">
                    {['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '40', '42', '44', '46', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '1 Yr', '2 Yr', '3/4 Yr', '5/6 Yr', '7/8 Yr', '9/10 Yr', '11/12 Yr', '13/14 Yr', '20', '22', '24', '26', '28', '29', '30', '31', '32', '33', '34', '36', '38'].map(size => (
                      <button key={size} className="size-btn">{size}</button>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="sidebar-section">
                  <div className="sidebar-title">
                    <h4>BRANDS</h4>
                    <span>-</span>
                  </div>
                  <div className="sidebar-options">
                    {['THE AUTOGRAPH', 'FIONA'].map(brand => (
                      <label key={brand} className="checkbox-label">
                        <input type="checkbox" />
                        <span>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div className="sidebar-section">
                  <div className="sidebar-title">
                    <h4>COLOR</h4>
                    <span>-</span>
                  </div>
                  <div className="color-grid">
                    {['#1877F2', '#2E5A1C', '#C29F55', '#4A2A20', '#F5E4CA', '#000000', '#B7759F', '#BC9F4C', '#3F701B', '#7A0A10', '#C59500', '#000080', '#FFFFFF', '#ECA3A3', '#F260A6', '#FFFFFF', '#FF0000', '#B3B3B3', '#00FFFF', '#E0FFEB', '#00607F'].map((color, idx) => (
                      <button key={idx} className="color-swatch" style={{ backgroundColor: color }}></button>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

            {/* Product Grid */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ color: '#666' }}>Showing {uniqueProducts.length} results</span>
                <select style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}>
                  <option>Sort by Popularity</option>
                  <option>Sort by Newness</option>
                  <option>Sort by Price: Low to High</option>
                  <option>Sort by Price: High to Low</option>
                </select>
              </div>
              <div className="product-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {uniqueProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
