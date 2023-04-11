import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";

function Profile() {
  const formikProfile = useFormik({
    initialValues: {
      username: "",
      mobileNumber: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, "UserName Should be at least 5 charactes")
        .required("Required*"),
      mobileNumber: Yup.string()
        .min(10, "needed 10 numbers")
        .required("Required*"),
      email: Yup.string().email("invalid email id").required("Required*"),
    }),
  });
  return (
    <div className="margin">
      <div className="aligning">
        <h1 className="profile_name">Profile</h1>
        <div className="aligning">
          <form className="form" onSubmit={formikProfile.handleSubmit}>
            <div className="l-inputs-align">
              <p className="names">First Name</p>
              <input
                value={formikProfile.values.username}
                onChange={formikProfile.handleChange}
                id="username"
                name="username"
                className="input5"
                type="text"
                placeholder="Enter name"
              />
              {formikProfile.touched.username &&
              formikProfile.errors.username ? (
                <div className="p-error">{formikProfile.errors.username}</div>
              ) : null}
            </div>
            <div className="l-inputs-align">
              <p className="names">Mobile Number</p>
              <input
                value={formikProfile.values.mobileNumber}
                onChange={formikProfile.handleChange}
                id="mobileNumber"
                name="mobileNumber"
                className="input5 number-input"
                type="number"
                placeholder="Enter Mobile"
              />
              {formikProfile.touched.mobileNumber &&
              formikProfile.errors.mobileNumber ? (
                <div className="p-error">
                  {formikProfile.errors.mobileNumber}
                </div>
              ) : null}
            </div>
            <div className="l-inputs-align">
              <p className="names">Email</p>
              <input
                value={formikProfile.values.email}
                onChange={formikProfile.handleChange}
                id="email"
                name="email"
                className="input5"
                type="email"
                placeholder="Enter Email"
              />
              {formikProfile.touched.email && formikProfile.errors.email ? (
                <div className="p-error">{formikProfile.errors.email}</div>
              ) : null}
            </div>

            <hr />
            <div className="left-align">
              <div className="btn-align2">
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
export default Profile;
