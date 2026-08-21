export default function PageLayout({ title, children }) {
  return (
    <main className="page-layout">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{title}</h1>
        </div>
      </div>
      <div className="page-content section">
        <div className="container">
          <div className="content-box">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
