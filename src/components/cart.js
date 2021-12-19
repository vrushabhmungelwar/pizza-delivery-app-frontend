import React from "react";
import Button from "@mui/material/Button";

import { Card, CardContent } from "@mui/material";

import { useCart, useDispatchCart } from "../context/Context";
export const CartItem = ({ pizza, index, handleRemove }) => {
  return (
    <div className="pizza-container">

    <Card >
      <img src={pizza.img} className="pizza-poster"  alt={pizza.name} />
      <CardContent>
      <div className="pizza-details">
          <h1>{pizza.name}</h1>
        </div>
        {/* <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2> */}
        {/* <dl className="mt2 f6">
            <dt className="clip">Price</dt>
            <dd className="ml0">
              {pizza.price.toLocaleString("en", {
                style: "currency",
                currency: "USD"
              })}
            </dd>
          </dl> */}
        <Button onClick={() => handleRemove(index)}>Remove from cart</Button>
      </CardContent>
    </Card>
      </div>

  );
};

export default function Store() {
  const items = useCart();
  const dispatch = useDispatchCart();
  //   const totalPrice = items.reduce((total, b) => total + b.price, 0);

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main>
        <p>Cart is empty</p>
      </main>
    );
  }
  return (
    <main>
      {/* <p>
        Total price:{" "}
        {totalPrice.toLocaleString("en", {
          style: "currency",
          currency: "USD"
        })}
      </p> */}
      {items.map((item, index) => (
        <CartItem
          handleRemove={handleRemove}
          key={index}
          pizza={item}
          index={index}
        />
      ))}
    </main>
  );
}
