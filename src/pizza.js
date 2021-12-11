import { Card, CardContent } from "@mui/material";
import { Counter } from "./Counter.js";

export function Pizza({ name, img }) {
  return (
    <Card className="movie-container">
      <img className="pizza-poster" src={img} alt={name} />
      <CardContent>
        <div className="pizza">
          <h3>{name}</h3>
          <Counter />
        </div>
      </CardContent>
    </Card>
  );
}
