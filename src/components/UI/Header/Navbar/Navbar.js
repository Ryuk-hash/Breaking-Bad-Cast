import React from 'react';

import './Navbar.css';

import logo from '../../../../assets/logos/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="row">
        <img src={logo} alt="Breaking Bad Logo" className="logo" />

        <ul className="main-nav">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#characters">Characters</a>
          </li>

          <li>
            <a href="#reviews">Reviews</a>
          </li>

          <li>
            <a href="#search">
              <i className="fa fa-search"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
