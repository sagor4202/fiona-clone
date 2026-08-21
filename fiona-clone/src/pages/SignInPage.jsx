import { Link } from 'react-router-dom';

export default function SignInPage() {
  return (
    <main className="signin-page">
      <div className="page-header" style={{ padding: '60px 0', background: '#f9f9f9', textAlign: 'center' }}>
        <div className="container">
          <h1 className="page-title" style={{ fontSize: '32px', marginBottom: '10px' }}>Sign In</h1>
          <p style={{ color: '#666' }}>Welcome back to O-MEN. Please log in to your account.</p>
        </div>
      </div>
      
      <div className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="content-box" style={{ padding: '40px', background: '#fff', border: '1px solid #eee', borderRadius: '4px' }}>
            <form>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '13px', fontWeight: '600', color: '#333' }}>EMAIL ADDRESS *</label>
                <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', outline: 'none' }} required />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#333' }}>PASSWORD *</label>
                  <Link to="#" style={{ fontSize: '12px', color: 'var(--primary-color)' }}>Forgot Password?</Link>
                </div>
                <input type="password" placeholder="Enter your password" style={{ width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '4px', outline: 'none' }} required />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#555', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: 'var(--primary-color)' }} /> Remember Me
                </label>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>LOG IN</button>
            </form>
            <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '14px', color: '#666' }}>
              Don't have an account? <Link to="#" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Register Now</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
