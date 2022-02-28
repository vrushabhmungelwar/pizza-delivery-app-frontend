import { useState, useEffect } from "react";
import { API_URL } from "../helpers/global-constants";
import Pizza from "../helpers/pizza";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import SyncLoader from "react-spinners/SyncLoader";
// import jsonwebtoken from "jsonwebtoken";
export function PizzaList() {
  const history = useHistory();

  const [pizzas, setPizzas] = useState(
    JSON.parse(localStorage.getItem("pizzas")) || []
  );
  //  console.log(JSON.parse(localStorage.getItem("pizzas")))
  const [loading, setLoading] = useState(false);
  // const getPizzas = () => {

  // };
  useEffect(() => {
    if (pizzas.length === 0) {
      setLoading(true);
      const token = localStorage.getItem("token");
      // var decoded = jsonwebtoken.decode(token);
      if (!token) {
        history.push("/userLogIn");
        alert("Need to login first");
      }
      // if (decoded.exp * 1000 < Date.now()) {
      //   history.push("/userLogIn");
      // }

      fetch(`${API_URL}/pizzalist`, {
        headers: {
          "x-auth-token": token,
        },
      })
        .then((data) => data.json())
        .then((piz) => {
          setPizzas(piz);
          setLoading(false);
        });
    }
  }, [history, pizzas]);
  localStorage.setItem("pizzas", JSON.stringify(pizzas));

  // console.log(pizzas);
  return (
    <section>
      {loading ? (
        <div className="loader">
          <SyncLoader
            color="rgba(54, 215, 183)"
            loading={loading}
            size={15}
            margin={2}
          />
        </div>
      ) : (
        <div>
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
                <Pizza
                  pizza={pizza}
                  key={pizza._id}
                  pizzas={pizzas}
                  setPizzas={setPizzas}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
