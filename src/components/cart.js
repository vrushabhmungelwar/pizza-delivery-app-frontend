import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// import { Card, CardContent } from "@mui/material";

import { useCart, useDispatchCart } from "../context/Context";
export const CartItem = ({ pizza, index, handleRemove }) => {
  return (
    // <div className="pizza-container">
    //   <Card>
    //     <img src={pizza.img} className="pizza-poster" alt={pizza.name} />
    //     <CardContent>
    //       <div className="pizza-details">
    //         <h1>{pizza.name}</h1>
    //       </div>
    //       <Button onClick={() => handleRemove(index)}>Remove from cart</Button>
    //     </CardContent>
    //   </Card>
    // </div>
    <nav>
      <List>
      <div className="cart-content-child">
        <ListItem>
          <img src={pizza.img} className="pizza-poster-cart" alt={pizza.name} />
          <div className="pizza-details">
            <h1 style={{margin: "2rem"}}>{pizza.name}</h1>
          </div>
          <Button
            onClick={() => handleRemove(index)}
            style={{ marginLeft: "auto" }}
          >
            Remove from cart
          </Button>
        </ListItem>
        </div>
      </List>
    </nav>
  );
};

export default function Cart() {
  const history = useHistory();
  const items = useCart();
  const dispatch = useDispatchCart();

  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  if (items.length === 0) {
    return (
      <main>
        <h2>Cart is empty</h2>
        <Button
          style={{ marginLeft: "auto" }}
          variant="text"
          color="inherit"
          edge="end"
          onClick={() => history.push("/pizzaList")}
        >
          Admin Login
        </Button>
      </main>
    );
  }
  return (
    <div>
      <Button
        style={{ marginLeft: "auto" }}
        variant="text"
        color="inherit"
        edge="end"
        onClick={() => history.push("/pizzaList")}
      >
        Go back
      </Button>
      <main>
        {items.map((item, index) => (
          <CartItem
            handleRemove={handleRemove}
            key={index}
            pizza={item}
            index={index}
          />
        ))}
      </main>
    </div>
  );
}
