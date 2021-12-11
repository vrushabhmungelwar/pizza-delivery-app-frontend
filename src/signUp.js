import { useFormik } from "formik";
import * as yup from "yup";
import { API_URL } from "./global-constants";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const formValidationSchema = yup.object({
  name: yup
    .string()
    .min(2, "name is too short")
    .required("name can't be blank"),

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

export function SignUp() {
  const history = useHistory();

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: { name: "", email: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
        createUser(values);
      },
    });

  const createUser = async (values) => {
    const response = await fetch(`${API_URL}/user/register`, {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(values);
    const json = await response.json();
    console.log(json);
    if (json.success) {
      history.push("/success");
    }
  };
  return (
    <div className="signin-container">
      <Box
        sx={{
          width: 300,
          height: 220,
          backgroundColor: "primary",
        }}
      >
        <div>
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <TextField
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                label="name"
                type="text"
                error={errors.name && touched.name}
                helperText={errors.name && touched.name && errors.name}
                variant="standard"
              />
              <TextField
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                label="email"
                type="email"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
                variant="standard"
              />

              <TextField
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                label="password"
                type="password"
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
                variant="standard"
              />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </Box>
    </div>
  );
}
