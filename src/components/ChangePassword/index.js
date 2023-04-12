import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";

function ChangePassword() {
  const formikPassword = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      reEnterNewPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .min(8, "password should be at least 8 characters long.")
        .required("Required*"),
      newPassword: Yup.string()
        .min(8, "password should be at least 8 characters long.")
        .required("Required*"),
      reEnterNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
  });
  return (
    <div className="margin">
      <div className="aligning">
        <h1 className="profile_name">Change Password</h1>
        <hr />
        <div className="aligning">
          <form className="form" onSubmit={formikPassword.handleSubmit}>
            <div className="c-inputs-align">
              <p className="names">Current password</p>
              <input
                className="input1"
                {...formikPassword.getFieldProps("currentPassword")}
                type="password"
                placeholder="Enter current password"
              />
              {formikPassword.touched.currentPassword &&
              formikPassword.errors.currentPassword ? (
                <div className="c-error">
                  {formikPassword.errors.currentPassword}
                </div>
              ) : null}
            </div>
            <div className="c-inputs-align">
              <p className="names">Enter New Password</p>
              <input
                {...formikPassword.getFieldProps("newPassword")}
                className="input1"
                type="password"
                placeholder="Enter New Password"
              />
              {formikPassword.touched.newPassword &&
              formikPassword.errors.newPassword ? (
                <div className="c-error">
                  {formikPassword.errors.newPassword}
                </div>
              ) : null}
            </div>
            <div className="c-inputs-align">
              <p className="names">Re-Enter New Password</p>
              <input
                {...formikPassword.getFieldProps("reEnterNewPassword")}
                className="input1"
                type="password"
                placeholder="Re-Enter New Password"
              />
              {formikPassword.touched.reEnterNewPassword &&
              formikPassword.errors.reEnterNewPassword ? (
                <div className="c-error">
                  {formikPassword.errors.reEnterNewPassword}
                </div>
              ) : null}
            </div>

            <hr />
            <div className="left-align">
              <div className="btn-align3">
                <button className="buttons btn-cancel" type="button">
                  cancel
                </button>
                <button className="buttons btn-save" type="submit">
                  save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
