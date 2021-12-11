import "./App.css";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Switch, Route } from "react-router-dom";
import { AdminLogIn } from "./AdminLogIn";
import { UserLogIn } from "./userLogIn";
import { SignUp } from "./signUp";
import { Success } from "./success";
import { PizzaList } from "./PizzaList";
import { DashBoard } from "./adminDashboard";
import { AppBar, Toolbar } from "@mui/material";
import { CustomPizza } from "./createPizza";

export default function App() {
  const history = useHistory();

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
            onClick={() => history.push("/userLogIn")}
          >
            User Login
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/signUp")}
          >
            signUp
          </Button>

          <div>
            <Button
              variant="text"
              color="inherit"
              edge="end"
              onClick={() => history.push("/AdminLogIn")}
            >
              Admin Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <h2 className="header">Welcome to Pizza Shop</h2>
      
      <Switch>
        <Route exact path="/AdminLogIn">
          <AdminLogIn />
        </Route>
        <Route exact path="/userLogIn">
          <UserLogIn />
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route exact path="/pizzaList">
          <PizzaList />
        </Route>
        <Route exact path="/adminDashboard">
          <DashBoard />
        </Route>
        <Route exact path="/createPizza">
          <CustomPizza />
        </Route>
      </Switch>
    </div>
  );
}
