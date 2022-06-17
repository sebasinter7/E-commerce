/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCart } from "../store/slices/cart.slice";
import CartSidebar from "./CartSidebar";

const Navbar = () => {

  const [show, setShow] = useState(false);

  const navigate = useNavigate( )

  const handleClose = () => setShow(false);
  const handleShow = () => {
    const token = localStorage.getItem( "token" )

    if( token ) {

      setShow(true);
    }else {
      navigate( "/login" )
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getCart());
  }, [dispatch]);

  const logOut = () => localStorage.setItem("token", "");

  return (
    <div>
      
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mb-0 h1" to="/">
            {" "}
            E-commerce
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/purchases">
                Purchases
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/purchases" onClick={ handleShow }>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logOut}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <CartSidebar show={ show } handleClose={ handleClose } />
    </div>
  );
};

export default Navbar;
