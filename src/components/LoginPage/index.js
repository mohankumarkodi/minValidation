import { React, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./index.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
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
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="l-align-name">
      <p className="heading">please login to be continued</p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <p className="l-disc">Username*</p>
            <input
              {...formik.getFieldProps("username")}
              className="l-input2"
              type="text"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="l-error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div>
            <p className="l-disc">password*</p>
            <div className="container-visable">
              <input
                {...formik.getFieldProps("password")}
                className="l-input2 password-symbol"
                type={showPassword ? "text" : "password"}
              />
              <span>
                <button type="button" className="eye-button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </span>
            </div>

            {formik.touched.password && formik.errors.password ? (
              <div className="l-error">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>
        <div className="l-btn-align">
          <button type="submit" className="l-btn">
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
