import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useCart, useDispatchCart } from "../context/Context";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import { useState } from "react";
import { Counter } from "../helpers/Counter";
export const CartItem = ({ pizza, index, handleRemove, count, setCount }) => {
  // const [count, setCount] = useState(1);
  console.log(count);
  return (
    <nav>
      <List>
        <div className="cart-content-child">
          <ListItem>
            <img
              src={pizza.img}
              className="pizza-poster-cart"
              alt={pizza.name}
            />
            <div className="pizza-details">
              <h1 style={{ margin: "2rem" }}>{pizza.name}</h1>
            </div>

            <Counter count={count} setCount={setCount} />
            <IconButton
              onClick={() => handleRemove(index)}
              style={{ marginLeft: "auto" }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        </div>
      </List>
    </nav>
  );
};

export default function Cart({ count, setCount }) {
  const history = useHistory();
  const items = useCart();
  const dispatch = useDispatchCart();
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  return items.length === 0 ? (
    <div>
      <h2>Cart is empty</h2>
      <Button
        style={{ marginLeft: "auto" }}
        variant="text"
        color="inherit"
        edge="end"
        onClick={() => history.push("/pizzaList")}
      >
        Go back
      </Button>
    </div>
  ) : (
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
            count={count}
            setCount={setCount}
          />
        ))}
      </main>
    </div>
  );
}
