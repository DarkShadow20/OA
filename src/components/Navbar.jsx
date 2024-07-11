import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='fixed bottom-0 left-0 z-50 w-full h-12 bg-white border-t border-gray-200 '>
    <nav className="bg-gray-800 p-4 text-white sticky">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/favourites" className="mr-4">Favourites</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  </div>
);

export default Navbar;
