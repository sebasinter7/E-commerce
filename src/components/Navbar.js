/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart } from '../store/slices/cart.slice';

const Navbar = () => {

  const dispatch = useDispatch( )

  useEffect( ( ) => {
    dispatch( getCart( ) )
    console.log("me ejecute")
  }, [dispatch] )

  const logOut = ( ) => localStorage.setItem( "token", "" )

    return (
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand mb-0 h1" to= '/'> E-commerce</Link>
              <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <Link className="nav-link active" to='/login'>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/purchases'>Purchases</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='cart'>Cart</Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className="nav-link" 
                      to='logout'
                      onClick={ logOut }>Log out</Link>
                  </li>            
                </ul>
            </div>
          </nav>
        </div>
    );
};

export default Navbar;