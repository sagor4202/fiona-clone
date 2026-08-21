import ProductCard from '../components/ProductCard';
import { topSellingProducts } from '../data/products';
import { Link } from 'react-router-dom';

export default function WishlistPage() {
  // Use a couple of products as mocked wishlist items
  const wishlistItems = topSellingProducts ? topSellingProducts.slice(0, 4) : [];

  return (
    <main className="wishlist-page">
      <div className="page-header" style={{ padding: '60px 0', background: '#f9f9f9', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ fontSize: '32px', marginBottom: '10px' }}>My Wishlist</h1>
          <p style={{ color: '#666' }}>View and manage your saved items.</p>
        </div>
      </div>
      
      <div className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          {wishlistItems.length > 0 ? (
            <div className="product-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
              gap: '20px' 
            }}>
              {wishlistItems.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: '48px', color: '#ccc', marginBottom: '20px' }}>♡</div>
              <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Your wishlist is empty</h3>
              <p style={{ color: '#666', marginBottom: '30px' }}>You haven't saved any items yet. Start shopping and add your favorite items to your wishlist!</p>
              <Link to="/shop" className="btn btn-primary">Return to Shop</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
