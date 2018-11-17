import React from 'react';

const NavBar = ({ totalCounters }) => {
  return (  
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#la">Navbar
        <span className="badge badge-pill badge-secondary ml-4">{totalCounters}</span>
      </a>
    </nav>
  );
}

export default NavBar;