import { Route, Redirect } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

const ProtectedRoute = ({ Proute, count, setCount }) => {
  const token = localStorage.getItem("token");
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);
  return (
    <Route
      render={() =>
        myDecodedToken && isMyTokenExpired === false ? (
          <Proute count={count} setCount={setCount} />
        ) : (
          <Redirect to="/userLogIn" />
        )
      }
    />
  );
};

export default ProtectedRoute;
