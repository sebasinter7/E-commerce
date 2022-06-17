import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchases } from "../store/slices/purchases.slice";

const Purchases = ( ) => {
  const dispatch = useDispatch();

  const purchases = useSelector((state) => state.purchases);

  const navigate = useNavigate( )

  useEffect(() => {
    dispatch(getPurchases());
  }, [dispatch]);
  

  return (
    <div>
      <h1>Purchases</h1>

      <Card>
        {purchases.map((purchased) => (           

          <>
            <Card.Header as="h5" key={ purchased.id }>{ purchased.updatedAt }</Card.Header>
            <Card.Body>
              {purchased.cart?.products.map((purchase) => (
                <>
                  <Card.Title 
                    onClick={ ( ) => navigate( `/products/${ purchase.id }` ) } 
                    key={ purchase.id }>
                      {purchase.title}
                  </Card.Title>
                  <Card.Text>
                    <b>Price: </b>
                    {purchase.price}
                  </Card.Text>
                </>
              ))}
            </Card.Body>
          </>
        ))}
      </Card>
    </div>
  );
};

export default Purchases;
