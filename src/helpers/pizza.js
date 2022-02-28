import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import { Counter } from "../helpers/Counter";
import { useCart, useDispatchCart } from "../context/Context";

const Pizza = ({ pizza, pizzas, setPizzas }) => {
  // const [varient, setVarient] = useState("small");
  // console.log(pizza)
  const dispatch = useDispatchCart();
  const items = useCart();

  const addToCart = (item) => {
    const temp = items.filter((elem) => elem.name === item.name);
    const temp2 = temp[0];
    // setPizzas((pizzas[item._id] = item));
    const temp3 = JSON.parse(localStorage.getItem("pizzas"));
    // temp3[temp2] = item
    const temp4 = temp3.filter((e) => e.name === item.name);
    const temp5 = temp4[0];
    temp5.quantity = count;
    console.log(temp5);
    if (temp2) {
      return;
    }
    dispatch({ type: "ADD", item });
  };
  const [disable, setDisable] = useState(false);
  const [count, setCount] = useState(pizza.quantity || 0);
  const [variant, setVariant] = useState("small");
  const varients = pizza.varients;
  const price = pizza.prices[0];
  const [Itemtotal, setItemTotal] = useState(price[variant] * count || 0);
  pizza.quantity = count;
  useEffect(() => {
    // setCount(pizza.quantity)
    sessionStorage.setItem(`${pizza.name}`, Itemtotal);
    setItemTotal(price[variant] * count);
  }, [count, pizza, price, Itemtotal, variant]);
  // console.log(pizza)
  return (
    <Card className="pizzas-container">
      <img className="pizza-poster" src={pizza.img} alt={pizza.name} />
      <CardContent>
        <div className="pizza-details">
          <h3>{pizza.name}</h3>
          <p>💵: {price[variant]}</p>
          <select
            value={variant}
            onChange={(event) => setVariant(event.target.value)}
          >
            {varients.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
          <Counter count={count} setCount={setCount} />
          <Button
            disabled={disable}
            onClick={() => {
              addToCart(pizza);
              setDisable(!disable);
            }}
          >
            {disable === true ? "Added" : "Add to cart"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Pizza;
