import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

export default function ThankYouPage() {
  return (
    <main className="thank-you-page section">
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', background: '#fff', padding: '50px 30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <FiCheckCircle size={80} color="#b1d842" style={{ marginBottom: '20px' }} />
          <h1 style={{ fontSize: '32px', color: 'var(--title-color)', marginBottom: '15px' }}>Thank You For Your Order!</h1>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
            Your order has been received and is now being processed. We will send you an email with the tracking information once your items have shipped.
          </p>
          
          <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '30px', textAlign: 'left' }}>
            <p style={{ margin: '0 0 10px 0' }}><strong>Order Number:</strong> #FIO-{Math.floor(Math.random() * 100000)}</p>
            <p style={{ margin: '0 0 10px 0' }}><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            <p style={{ margin: '0 0 0 0' }}><strong>Payment Method:</strong> Cash on Delivery</p>
          </div>
          
          <Link to="/" className="view-all" style={{ padding: '15px 30px', fontSize: '16px' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
