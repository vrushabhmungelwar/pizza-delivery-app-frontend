import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export function Success() {
  const history = useHistory();

  return (
    <div>
      <h1>Account Created</h1>

      <Button
        variant="text"
        color="inherit"
        onClick={() => history.push("/userLogIn")}
      >
        Go to Login
      </Button>
    </div>
  );
}
