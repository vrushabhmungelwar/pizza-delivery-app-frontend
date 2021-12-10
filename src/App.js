import "./App.css";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { Switch, Route } from "react-router-dom";
import { AdminLogIn } from "./AdminLogIn";
import { UserLogIn } from "./userLogIn";
import { SignUp } from "./signUp";
import { Success } from "./success";
import { SuccessfulLogIn } from "./pizza";
import { DashBoard } from "./adminDashboard";

export default function App() {
  const history = useHistory();

  return (
    <div className="App">
      <h2 className="header">Welcome to Pizza Mania</h2>
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
        onClick={() => history.push("/AdminLogIn")}
      >
        Admin Login
      </Button>
      <Button
        variant="text"
        color="inherit"
        onClick={() => history.push("/signUp")}
      >
        signUp
      </Button>

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
        <Route exact path="/pizza">
          <SuccessfulLogIn />
        </Route>
        <Route exact path="/adminDashboard">
          <DashBoard />
        </Route>
      </Switch>
    </div>
  );
}
