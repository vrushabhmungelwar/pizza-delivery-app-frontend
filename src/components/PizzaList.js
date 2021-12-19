import { useState, useEffect } from "react";
import { API_URL } from "../helpers/global-constants";
import Pizza from "../helpers/pizza";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
export function PizzaList() {
  const history = useHistory();

  const [pizzas, setPizzas] = useState([]);

  const getPizzas = () => {
    fetch(`${API_URL}/pizzalist`)
      .then((data) => data.json())
      .then((piz) => setPizzas(piz));
  };
  useEffect(getPizzas, []);

  return (
    <section>
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => history.push("/createPizza")}
      >
        Create Pizza
      </Button>

      <div className="pizza-container">
        {pizzas.map((pizza) => (
          <div key={pizza._id}>
            <Pizza pizza={pizza} key={pizza._id} />
          </div>
        ))}
      </div>
    </section>
  );
}
