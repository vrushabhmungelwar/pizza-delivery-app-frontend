import {
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Typography,
  Link,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { API_URL } from "../helpers/global-constants";
import { useHistory } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import copy from "copy-to-clipboard";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "email is too short")
    .required("email can't be blank")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not matches"),
  password: yup
    .string()
    .min(8, "password is too short")
    .required("password can't be blank"),
});

export function UserLogIn({ setLogin }) {
  const theme = createTheme();
  const history = useHistory();

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        checkCredentials(values);
      },
    });

  const checkCredentials = async (values) => {
    const response = await fetch(`${API_URL}/user/signin`, {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.token);
      setLogin(true);
      history.push("/pizzaList");
    } else {
      alert("Invalid Credentials");
    }
  };
  const copyToClipboard = async (text) => {
    copy(text);
  };
  return (
    <div>
      <div className="demo">
        <h3>Demo Credentials</h3>
        <h5>
          Email: johndoe@gmail.com
          <IconButton
            onClick={() => {
              const text = "johndoe@gmail.com";
              copyToClipboard(text);
            }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </h5>

        <h5>
          Password: johndoe1
          <IconButton
            onClick={() => {
              const text = "johndoe1";
              copyToClipboard(text);
            }}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </h5>
      </div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box sx={{ mt: 3 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      name="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Email"
                      type="email"
                      error={errors.email && touched.email}
                      helperText={errors.email && touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="password"
                      name="password"
                      fullWidth
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Password"
                      type="password"
                      error={errors.password && touched.password}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
              </form>

              <Link
                component="button"
                variant="body2"
                sx={{ ml: 43 }}
                onClick={() => history.push("/signUp")}
              >
                Signup
              </Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
