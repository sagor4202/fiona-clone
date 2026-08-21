import PageLayout from '../components/PageLayout';
import { useState } from 'react';

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking functionality for order ${orderId} will be implemented with the backend API.`);
  };

  return (
    <PageLayout title="Track Your Order">
      <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
        <p>Enter your Order ID below to check the current status of your shipment.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '30px' }}>
          <input 
            type="text" 
            placeholder="Order ID (e.g. FIO-12345)" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
            required
          />
          <button type="submit" className="view-all" style={{ padding: '14px', fontSize: '16px', width: '100%', border: 'none', cursor: 'pointer' }}>
            Track Order
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
