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
    <div className="c-margin">
      <div className="c-aligning">
        {/* <h1 className="c-profile_name">Change Password</h1> */}
        <div className="c-aligning">
          <form className="c-form" onSubmit={formikPassword.handleSubmit}>
            <div className="c-inputs-align">
              <p className="c-names">Current password</p>
              <input
                className="c-input1"
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
              <p className="c-names">Enter New Password</p>
              <input
                {...formikPassword.getFieldProps("newPassword")}
                className="c-input1"
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
              <p className="c-names">Re-Enter New Password</p>
              <input
                {...formikPassword.getFieldProps("reEnterNewPassword")}
                className="c-input1"
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
            <div className="c-left-align">
              <div className="c-btn-align3">
                <button className="c-buttons c-btn-cancel" type="button">
                  cancel
                </button>
                <button className="c-buttons c-btn-save" type="submit">
                  save
                </button>
              </div>
            </div>
          </form>
        </div>
        <img className="img" src="https://cdn.mos.cms.futurecdn.net/5fz9SMYxWbv44jFVcD4vmd-970-80.jpg.webp"/>
      </div>
    </div>
  );
}
export default ChangePassword;
