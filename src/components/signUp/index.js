import React from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import "./index.css";
function SignUp() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username should be at least 5 characters long.")
        .required("Required*"),
      password: Yup.string()
        .min(8, "password should be at least 8 characters long.")
        .required("Required*"),
    }),
  });
  return (
    <div className="s-align-name">
      <p className="s-heading">please signUp to be continued</p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <p className="s-disc">Username*</p>
            <input
              {...formik.getFieldProps("username")}
              className="s-input2"
              type="text"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="s-error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <p className="s-disc">password*</p>
            <input
              {...formik.getFieldProps("password")}
              className="s-input2"
              type="password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="s-error">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>
        <div className="s-btn-align">
          <button type="submit" className="s-btn">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
