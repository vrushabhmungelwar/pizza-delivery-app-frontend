import { Route, Redirect } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";

const ProtectedRoute = ({ Proute }) => {
  const token = localStorage.getItem("token");
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);
  console.log(myDecodedToken, isMyTokenExpired);
  return (
    <Route
      render={() =>
        myDecodedToken && isMyTokenExpired === false ? (
          <Proute />
        ) : (
          <Redirect to="/userLogIn" />
        )
      }
    />
  );
};

export default ProtectedRoute;
