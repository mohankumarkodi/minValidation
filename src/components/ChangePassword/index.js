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
  });
  return (
    <div className="margin">
      <div className="aligning">
        <h1 className="profile_name">Change Password</h1>
        <hr />
        <div className="aligning">
          <form className="form">
            <div className="c-inputs-align">
              <p className="names">Current password</p>
              <input
                id="currentPassword"
                name="currentPassword"
                value={formikPassword.values.currentPassword}
                onChange={formikPassword.handleChange}
                className="input1"
                type="password"
                placeholder="Enter current password"
              />
            </div>
            <div className="c-inputs-align">
              <p className="names">Enter New Password</p>
              <input
                id="newPassword"
                name="newPassword"
                value={formikPassword.values.newPassword}
                onChange={formikPassword.handleChange}
                className="input1"
                type="password"
                placeholder="Enter New Password"
              />
            </div>
            <div className="c-inputs-align">
              <p className="names">Re-Enter New Password</p>
              <input
                id="reEnterNewPassword"
                name="reEnterNewPassword"
                value={formikPassword.values.reEnterNewPassword}
                onChange={formikPassword.handleChange}
                className="input1"
                type="password"
                placeholder="Re-Enter New Password"
              />
            </div>

            <hr />
            <div className="left-align">
              <div className="btn-align3">
                <button className="buttons btn-cancel" type="button">
                  cancel
                </button>
                <button className="buttons btn-save" type="button">
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
