import { useState, useEffect } from "react";
import { API_URL } from "../helpers/global-constants";
import Pizza from "../helpers/pizza";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import jsonwebtoken from "jsonwebtoken";
export function PizzaList() {
  const history = useHistory();

  const [pizzas, setPizzas] = useState([]);

  const getPizzas = () => {
    const token = localStorage.getItem("token");
    var decoded = jsonwebtoken.decode(token);
    if (!token) {
      history.push("/userLogIn");
      alert("Need to login first");
    } else {
      if (decoded.exp * 1000 < Date.now()) {
        history.push("/userLogIn");
      }
      fetch(`${API_URL}/pizzalist`, {
        headers: {
          "x-auth-token": token,
        },
      })
        .then((data) => data.json())
        .then((piz) => setPizzas(piz));
    }
  };
  useEffect(getPizzas, [history]);

  const pizzas1 = pizzas;
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
        {pizzas1.map((pizza) => (
          <div key={pizza._id}>
            <Pizza pizza={pizza} key={pizza._id} />
          </div>
        ))}
      </div>
    </section>
  );
}
