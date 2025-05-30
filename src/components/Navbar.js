import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = ({ galleries, privateGalleries }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          Dushen Chetty Photography
        </Link>
        
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          
          <li className="dropdown">
            <button className="dropdown-toggle">
              Public Gallery <FaChevronDown />
            </button>
            <div className="dropdown-menu">
              {galleries.map(gallery => (
                <Link
                  key={gallery.path}
                  to={`/gallery/${gallery.path}`}
                  className="dropdown-item"
                >
                  {gallery.name}
                </Link>
              ))}
            </div>
          </li>
          
          <li className="dropdown">
            <button className="dropdown-toggle">
              Private Gallery <FaChevronDown />
            </button>
            <div className="dropdown-menu">
              {privateGalleries.map(gallery => (
                <Link
                  key={gallery.path}
                  to={`/private/${gallery.path}`}
                  className="dropdown-item"
                >
                  {gallery.name}
                </Link>
              ))}
            </div>
          </li>
          
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
