import { FiX, FiMinus, FiPlus, FiChevronRight } from 'react-icons/fi';
import { cubanShirts } from '../data/products';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '../data/products';

export default function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  // Using a mock item for demonstration
  const cartItem = cubanShirts[0];
  const upsellItem = cubanShirts[1];

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            transition: 'opacity 0.3s'
          }} 
        />
      )}

      {/* Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: isOpen ? 0 : '-400px', // Slide in/out
        width: '100%',
        maxWidth: '400px',
        height: '100vh',
        background: '#fff',
        zIndex: 1001,
        transition: 'right 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-5px 0 15px rgba(0,0,0,0.1)'
      }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #eee' }}>
          <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#333' }}>SHOPPING CART</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontSize: '14px', color: '#666' }}>
            Close <FiChevronRight />
          </button>
        </div>

        {/* Cart Items Area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          
          {/* Cart Item */}
          <div style={{ display: 'flex', gap: '15px', padding: '15px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px', position: 'relative' }}>
            <img src={cartItem.image} alt={cartItem.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#333' }}>{cartItem.name}</h4>
              <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}>Size: L</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden' }}>
                  <button style={{ padding: '4px 8px', background: '#fff', border: 'none', borderRight: '1px solid #ddd', cursor: 'pointer' }}><FiMinus size={12} /></button>
                  <span style={{ padding: '0 10px', fontSize: '13px' }}>1</span>
                  <button style={{ padding: '4px 8px', background: '#fff', border: 'none', borderLeft: '1px solid #ddd', cursor: 'pointer' }}><FiPlus size={12} /></button>
                </div>
                <span style={{ fontSize: '13px', color: '#333' }}>x <span style={{ textDecoration: 'line-through', color: '#999' }}>{formatPrice(cartItem.originalPrice)}</span> = <strong>{formatPrice(cartItem.price)}</strong></span>
              </div>
            </div>
            <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}>
              <FiX size={16} />
            </button>
          </div>

        </div>

        {/* Upsell Section */}
        <div style={{ background: '#f9f9f9', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h4 style={{ margin: 0, fontSize: '15px', color: '#003366', fontWeight: 'bold' }}>You May Also Like</h4>
            <div style={{ display: 'flex', gap: '5px' }}>
              <button style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#e0c99a', border: 'none', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>&lt;</button>
              <button style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#FFC107', border: 'none', color: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>&gt;</button>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '10px' }}>
            {/* Upsell Item */}
            <div style={{ flex: '0 0 250px', display: 'flex', gap: '10px', background: '#fff', padding: '10px', borderRadius: '8px', border: '1px solid #eee' }}>
              <img src={upsellItem.image} alt={upsellItem.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '4px' }} />
              <div>
                <h5 style={{ margin: '0 0 5px 0', fontSize: '13px', color: '#003366' }}>{upsellItem.name}</h5>
                <span style={{ fontSize: '13px', color: '#999' }}>{formatPrice(upsellItem.price)}</span>
                <button style={{ display: 'block', marginTop: '5px', padding: '4px 15px', background: '#FFC107', color: '#333', border: 'none', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}>+ Add</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Checkout */}
        <div style={{ padding: '20px', borderTop: '1px solid #eee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', fontWeight: 'bold', fontSize: '16px' }}>
            <span>Total:</span>
            <span>{formatPrice(cartItem.price)}</span>
          </div>
          <button 
            onClick={handleCheckout}
            style={{ width: '100%', padding: '15px', background: '#FFC107', color: '#333', border: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            CHECKOUT
          </button>
        </div>

      </div>
    </>
  );
}
