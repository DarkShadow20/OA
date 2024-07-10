import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <Link to="/" className="mr-4">Home</Link>
    <Link to="/favourites" className="mr-4">Favourites</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Navbar;
