import { Link } from 'react-router-dom';
import { cubanShirts, formatPrice } from '../data/products';
import { FiTrash2 } from 'react-icons/fi';

export default function CartPage() {
  const cartItems = cubanShirts.slice(0, 2);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="cart-page section">
      <div className="container">
        <h1 style={{ fontSize: '28px', color: 'var(--title-color)', marginBottom: '30px' }}>Shopping Cart</h1>
        
        <div style={{ display: 'flex', gap: '30px' }}>
          <div style={{ flex: '2', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                  <th style={{ padding: '15px 0' }}>Product</th>
                  <th style={{ padding: '15px 0' }}>Price</th>
                  <th style={{ padding: '15px 0' }}>Quantity</th>
                  <th style={{ padding: '15px 0' }}>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '20px 0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <img src={item.image} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                      <span style={{ fontWeight: '600', color: 'var(--title-color)' }}>{item.name}</span>
                    </td>
                    <td style={{ padding: '20px 0' }}>{formatPrice(item.price)}</td>
                    <td style={{ padding: '20px 0' }}>
                      <input type="number" defaultValue="1" min="1" style={{ width: '60px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </td>
                    <td style={{ padding: '20px 0', fontWeight: 'bold' }}>{formatPrice(item.price)}</td>
                    <td style={{ padding: '20px 0', textAlign: 'right' }}>
                      <button style={{ background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer' }}><FiTrash2 size={20} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div style={{ flex: '1' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Cart Totals</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span style={{ color: '#666' }}>Subtotal</span>
                <span style={{ fontWeight: '600' }}>{formatPrice(total)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                <span style={{ color: '#666' }}>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '18px', fontWeight: 'bold' }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary-color)' }}>{formatPrice(total)}</span>
              </div>
              
              <Link to="/checkout" style={{ display: 'block', width: '100%', padding: '15px', background: 'var(--primary-color)', color: '#fff', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
