import React from 'react';

interface SimpleLayoutProps {
  children: React.ReactNode;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Simple Sidebar */}
      <div style={{ 
        width: '250px', 
        backgroundColor: '#f0f0f0', 
        padding: '20px',
        borderRight: '1px solid #ddd'
      }}>
        <h3 style={{ marginBottom: '20px', color: '#AB322C' }}>Navigation</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>About</a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="/contact" style={{ color: '#333', textDecoration: 'none' }}>Contact</a>
          </li>
        </ul>
        
        {/* Contact Info */}
        <div style={{ marginTop: '40px', fontSize: '12px', color: '#666' }}>
          <h4 style={{ color: '#AB322C', marginBottom: '10px' }}>GET IN TOUCH</h4>
          <p>(248) 923-4300</p>
          <p>info@vyalux.com</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ 
        flex: 1, 
        backgroundColor: '#040404',
        overflow: 'auto'
      }}>
        {children}
      </div>
    </div>
  );
};

export default SimpleLayout;
