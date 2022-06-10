/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand mb-0 h1" to= '/'> E-commerce</Link>
              <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <Link className="nav-link active" to='/user'>User</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/purchases'>Purchases</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='cart'>Cart</Link>
                  </li>                  
                </ul>
            </div>
          </nav>
        </div>
    );
};

export default Navbar;