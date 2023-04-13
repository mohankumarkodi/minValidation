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
        .min(3, "UserName Should be at least 5 charactes")
        .required("Required*"),
      mobileNumber: Yup.string()
        .min(10, "needed 10 numbers")
        .required("Required*"),
      email: Yup.string().email("invalid email id").required("Required*"),
    }),
  });
  return (
    <div className="p-margin">
      <div className="p-aligning">
        <h1 className="p-profile_name">Profile</h1>
        <div className="p-aligning">
          <form className="p-form" onSubmit={formikProfile.handleSubmit}>
            <div className="p-inputs-align">
              <p className="p-names">First Name</p>
              <input
                {...formikProfile.getFieldProps("username")}
                className="p-input5"
                type="text"
                placeholder="Enter name"
              />
              {formikProfile.touched.username &&
              formikProfile.errors.username ? (
                <div className="p-error">{formikProfile.errors.username}</div>
              ) : null}
            </div>
            <div className="p-inputs-align">
              <p className="p-names">Mobile Number</p>
              <input
                {...formikProfile.getFieldProps("mobileNumber")}
                className="p-input5 number-input"
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
            <div className="p-inputs-align">
              <p className="p-names">Email</p>
              <input
                {...formikProfile.getFieldProps("email")}
                className="p-input5"
                type="email"
                placeholder="Enter Email"
              />
              {formikProfile.touched.email && formikProfile.errors.email ? (
                <div className="p-error">{formikProfile.errors.email}</div>
              ) : null}
            </div>

            <hr />
            <div className="p-left-align">
              <div className="p-btn-align2">
                <button className="p-buttons p-btn-cancel" type="button">
                  cancel
                </button>
                <button className="p-buttons p-btn-save" type="submit">
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
