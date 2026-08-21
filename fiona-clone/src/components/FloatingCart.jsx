import { FiShoppingBag } from 'react-icons/fi';

export default function FloatingCart({ setIsCartOpen }) {
  return (
    <div 
      className="floating-cart" 
      onClick={() => setIsCartOpen(true)}
      style={{
        position: 'fixed',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 999,
        background: '#FFC107', // Gold color from image
        color: '#fff',
        borderRadius: '8px 0 0 8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{ padding: '12px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FiShoppingBag size={24} style={{ marginBottom: '5px' }} />
        <span style={{ fontSize: '12px', fontWeight: '600' }}>0 Items</span>
      </div>
      <div style={{ background: '#fff', color: '#FFC107', width: '100%', padding: '6px 10px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold' }}>
        ৳0.00
      </div>
    </div>
  );
}
