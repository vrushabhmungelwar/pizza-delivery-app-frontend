import "./App.css";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Switch, Route } from "react-router-dom";
import { AdminLogIn } from "./components/AdminLogIn";
import { UserLogIn } from "./components/userLogIn";
import { SignUp } from "./components/signUp";
import { Success } from "./components/success";
import { PizzaList } from "./components/PizzaList";
import { DashBoard } from "./components/adminDashboard";
import { AppBar, Toolbar } from "@mui/material";
import { CustomPizza } from "./components/createPizza";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Home } from "./components/Home";
import { useCart } from "./context/Context";
import Cart from "./components/cart";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
import { isExpired, decodeToken } from "react-jwt";

export default function App() {
  const token = localStorage.getItem("token");
  const myDecodedToken = decodeToken(token);
  const isMyTokenExpired = isExpired(token);
  const [login, setLogin] = useState(
    myDecodedToken && isMyTokenExpired === false ? true : false
  );
  const items = useCart();
  const history = useHistory();
  function Logout() {
    localStorage.removeItem("token");
    setLogin(false);
    history.push("/userLogIn");
  }
  return (
    <div className="App">
      <AppBar
        position="static"
        style={{ marginBottom: "24px" }}
        color="transparent"
      >
        <Toolbar>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          {login === true ? (
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/pizzaList")}
            >
              Pizzas
            </Button>
          ) : (
            <></>
          )}
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, ml: 8 }}>
            Pizza Shop
          </Typography>

          {login === false ? (
            <Button
              style={{ marginLeft: "auto" }}
              variant="text"
              color="inherit"
              edge="end"
              onClick={() => history.push("/AdminLogIn")}
            >
              Admin
            </Button>
          ) : (
            <></>
          )}

          {login === true ? (
            <IconButton
              color="inherit"
              aria-label="add to shopping cart"
              onClick={() => history.push("/cart")}
            >
              <Badge badgeContent={items.length}>
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          ) : (
            <></>
          )}
          {login === true ? (
            <Button color="inherit" sx={{ ml: "auto" }} onClick={Logout}>
              Logout
            </Button>
          ) : (
            <Button
              variant="text"
              color="inherit"
              onClick={() => history.push("/userLogIn")}
            >
              User
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AdminLogIn">
          <AdminLogIn />
        </Route>
        <Route path="/userLogIn">
          <UserLogIn setLogin={setLogin} />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/adminDashboard">
          <DashBoard />
        </Route>
        <ProtectedRoute path="/pizzaList" Proute={PizzaList} />
        <ProtectedRoute path="/createPizza" Proute={CustomPizza} />
        <ProtectedRoute path="/cart" Proute={Cart} />
      </Switch>
    </div>
  );
}
