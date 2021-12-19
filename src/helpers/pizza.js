import { Card, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import CardMedia from '@mui/material/CardMedia';
// import { Counter } from "./Counter.js";

export function Pizza({ pizza}) {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
 
  return (
    <Card className="movie-container">
      <img className="pizza-poster" src={pizza.img} alt={pizza.name} />
      <CardContent>
        <div className="pizza">
          <div className="pizza-details">
            <h5>{pizza.name}</h5>

            <select
              value={varient}
              onChange={(e) => setVarient(e.target.value)}
            >
              {pizza.varients.map((varient) => (
                <option key={varient}>{varient}</option>
              ))}
            </select>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              {[...Array(10).keys()].map((v, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          {/* <h5>{pizza.price.map()}</h5> */}
          {/* <Counter count={count} setCount={setCount} /> */}
          <div>
            <Button
              variant="outlined"
              color="inherit"
              // onClick={() => setCart( arr => [...arr, `${arr.length}`])}
              // onClick={addPizzaToCart}
              // onClick={() =>}
            >
              Add to Cart
            </Button>
            <h6>Price: {pizza.prices[0][varient] * quantity}</h6>
          </div>
          {/* {console.log(cart)} */}
        </div>
      </CardContent>
    </Card>
  );
}
