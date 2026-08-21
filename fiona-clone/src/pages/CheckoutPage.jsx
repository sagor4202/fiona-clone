import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';

export default function CheckoutPage() {
  const total = 1598; // Mock total

  return (
    <main className="checkout-page section">
      <div className="container">
        <h1 style={{ fontSize: '28px', color: 'var(--title-color)', marginBottom: '30px' }}>Checkout</h1>
        
        <div style={{ display: 'flex', gap: '30px' }}>
          <div style={{ flex: '2', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>Billing Details</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#666' }}>First Name *</label>
                  <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} required />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#666' }}>Last Name *</label>
                  <input type="text" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} required />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#666' }}>Phone Number *</label>
                <input type="tel" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} required />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px', color: '#666' }}>Full Address *</label>
                <textarea rows="3" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }} required></textarea>
              </div>
            </form>
          </div>
          
          <div style={{ flex: '1' }}>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Your Order</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontWeight: 'bold' }}>
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              
              <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#666' }}>
                  <span>Cuban Shirt HW-2519 x 1</span>
                  <span>৳799</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666' }}>
                  <span>Cuban Shirt HW-2524 x 1</span>
                  <span>৳799</span>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span style={{ color: '#666' }}>Shipping</span>
                <span>৳70 (Inside Dhaka)</span>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '18px', fontWeight: 'bold' }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary-color)' }}>{formatPrice(total + 70)}</span>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input type="radio" name="payment" defaultChecked /> Cash on Delivery
                </label>
              </div>
              
              <Link to="/thank-you" style={{ display: 'block', width: '100%', padding: '15px', background: 'var(--primary-color)', color: '#fff', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
