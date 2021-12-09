import { useFormik } from "formik";
import * as yup from "yup";



const formValidationSchema = yup.object({
    email: yup
      .string()
      .min(5, "Need a bigger email😒")
      .required("why not fill this email😊")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not matches"),
      password: yup
      .string()
      .min(8, "Need a longer password😒")
      .max(12,"too much password😂")
      .required("why not fill this password😊"),
  });


export function AdminLogIn() {

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      // validate: validateForm,
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
      },
    });
    
  return (
    <div>
<h2>hello admin</h2>      
<form onSubmit={handleSubmit}>
      <input
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        placeholder="Enter your email"
      />
      {errors.email && touched.email && errors.email}
      <input
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="Enter your password"
      />
      {errors.password && touched.password ? errors.password : ""}
      <button type="submit">Login</button>
    </form>
    </div>
  );
}
