import React from "react";
import { Button, Card, ListGroup, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../store/slices/cart.slice";

const CartSidebar = ({ show, handleClose }) => {
  const carts = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const selectProduct = (cart) => {
    handleClose();
    navigate(`/products/${cart.id}`);
  };

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {carts.map((cart) => (
              <ListGroup.Item key={cart.id} onClick={() => selectProduct(cart)}>
                <Card.Body>
                  <Card.Title>{cart.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {cart.brand}
                  </Card.Subtitle>
                  <Card.Text>
                    <b>Price: </b> {cart.price}{" "}
                  </Card.Text>
                  <Card.Text>
                    <b>Quantity: </b> {cart.quantity}{" "}
                  </Card.Text>
                </Card.Body>
              </ListGroup.Item>
            ))}
          <Button 
            variant="primary" 
            size="lg"
            onClick={ ( ) => dispatch( checkout() ) }>
            Checkout
          </Button>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartSidebar;
