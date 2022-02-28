import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useCart, useDispatchCart } from "../context/Context";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
// import { Counter } from "../helpers/Counter";
export const CartItem = ({ pizza, index, handleRemove, setTotal }) => {
  // const [count, setCount] = useState(1);
  // const [variant, setVariant] = useState("small");
  // const varients = pizza.varients;
  // const price = pizza.prices[0];
  // const total = price[variant] * count;
  // const [Itemtotal, setItemTotal] = useState(price[variant] * count || 0);

  // setTotal(total)
  // console.log(total);
  // useEffect(() => {
  //   sessionStorage.setItem(`${pizza.name}`, Itemtotal);
  //   setItemTotal(price[variant] * count);
  // }, [count, pizza, price, Itemtotal, variant]);

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

            {/* <Counter count={count} setCount={setCount} /> */}

            

            {/* <p>Price: {Itemtotal}</p> */}
            <IconButton
              onClick={() => {
                handleRemove(index);
                sessionStorage.removeItem(`${pizza.name}`);
              }}
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

export default function Cart() {
  const [total, setTotal] = useState(0);
  const history = useHistory();
  const items = useCart();
  localStorage.setItem("cart", JSON.stringify(items));
  const dispatch = useDispatchCart();
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  useEffect(() => {
    let tot = 0;
    var ob = Object.keys(sessionStorage).map(function (c, i, a) {
      tot = +sessionStorage.getItem(c) + tot;
      return tot;
    });
    const t = ob.pop();
    setTotal(t);
  }, [total]);
  console.log(total);

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
      <p>Total: {total}</p>

      <main>
        {items.map((item, index) => (
          <CartItem
            handleRemove={handleRemove}
            key={index}
            pizza={item}
            index={index}
            // setTotal={setTotal}
          />
        ))}
      </main>
    </div>
  );
}
