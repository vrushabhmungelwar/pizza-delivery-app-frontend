import { useState, useEffect } from "react";
import { API_URL } from "./global-constants";
import { Pizza } from "./pizza";
import { CustomPizza } from "./createPizza";
import { Switch, Route } from "react-router-dom";
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
        {pizzas.map(({ name, img, _id }) => (
          <Pizza key={_id} name={name} img={img} />
        ))}
        
      </div>
      <Switch>
        <Route exact path="/createPizza">
          <CustomPizza />
        </Route>
      </Switch>
    </section>
  );
}
