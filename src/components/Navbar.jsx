import { Link } from 'react-router-dom'
import React from 'react';
import './nav.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">Echo & Ink</div>
      <div className="nav-links">
       <Link to={'/'}>Home</Link> 
       <Link to={'./create'}>Create Blog</Link> 
      </div>
    </nav>
  );
}

export default Navbar;

