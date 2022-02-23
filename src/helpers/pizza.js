import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";

import { useDispatchCart } from "../context/Context";

const Pizza = ({ pizza }) => {
  // const [varient, setVarient] = useState("small");

  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };
  const [disable, setDisable] = useState(false);

  return (
    <Card className="pizzas-container">
      <img className="pizza-poster" src={pizza.img} alt={pizza.name} />
      <CardContent>
        <div className="pizza-details">
          <h1>{pizza.name}</h1>
        </div>
        <Button
          disabled={disable}
          onClick={() => {
            addToCart(pizza);
            setDisable(!disable);
          }}
        >
          {disable === true ? "Added" : "Add to cart"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Pizza;
