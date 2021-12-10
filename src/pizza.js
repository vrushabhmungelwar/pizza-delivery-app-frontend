import { useState, useEffect } from "react";
import { API_URL } from "./global-constants";

function Pizza({ name, img }) {
  return (
    <div>
      <img className="pizza-poster" src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export function SuccessfulLogIn() {
  const [pizzas, setPizzas] = useState([]);

  const getMovies = () => {
    fetch(`${API_URL}/pizzalist`)
      .then((data) => data.json())
      .then((piz) => setPizzas(piz));
  };
  useEffect(getMovies, []);

  return (
    <section className="pizza-container">
      {pizzas.map(({ name, img, _id }) => (
        <Pizza key={_id} name={name} img={img} />
      ))}
    </section>
  );
}
