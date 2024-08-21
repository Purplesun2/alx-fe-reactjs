import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      padding: '10px', 
      borderBottom: '2px solid #ccc', 
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'space-around' 
    }}>
      <Link to="/" style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>About</Link>
      <Link to="/services" style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 15px', textDecoration: 'none', color: '#007bff' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
