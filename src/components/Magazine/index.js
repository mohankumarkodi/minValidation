import React from "react";
import { useFormik } from "formik";
import Dropdown from "../DropDown";
import * as Yup from "yup";
import "./index.css";
function MagazineForm() {
  const formikMagzine = useFormik({
    initialValues: {
      mobileNumber: "",
      email: "",
      postalCode: "",
      firstName: "",
      lastName: "",
      address: "",
    },
    validationSchema: Yup.object({
      postalCode: Yup.string()
        .length(6, "needed 6 numbers only")
        .required("Required*"),
      mobileNumber: Yup.string()
        .length(10, "needed 10 numbers")
        .required("Required*"),
      email: Yup.string().email("invalid email id").required("Required*"),
      firstName: Yup.string().required("Required*"),
      lastName: Yup.string().required("Required*"),
      address: Yup.string().required("Required*"),
    }),
  });
  return (
    <div className="page-align">
      <h1>Magazine Request Forms</h1>
      <form
        onSubmit={formikMagzine.handleSubmit}
        className={"magazine-container"}
      >
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>FirstName</p>
          <input
            className={"input-sizes"}
            type={"text"}
            {...formikMagzine.getFieldProps("firstName")}
          />
          {formikMagzine.touched.firstName && formikMagzine.errors.firstName ? (
            <div className="m-error">{formikMagzine.errors.firstName}</div>
          ) : null}
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>Last Name</p>
          <input
            className={"input-sizes"}
            type={"text"}
            {...formikMagzine.getFieldProps("lastName")}
          />
          {formikMagzine.touched.lastName && formikMagzine.errors.lastName ? (
            <div className="m-error">{formikMagzine.errors.lastName}</div>
          ) : null}
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>Email</p>
          <input
            className={"input-sizes"}
            type={"email"}
            {...formikMagzine.getFieldProps("email")}
          />
          {formikMagzine.touched.email && formikMagzine.errors.email ? (
            <div className="m-error">{formikMagzine.errors.email}</div>
          ) : null}
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>Phone Number</p>
          <input
            className={"input-sizes number-input"}
            type={"number"}
            {...formikMagzine.getFieldProps("mobileNumber")}
          />
          {formikMagzine.touched.mobileNumber &&
          formikMagzine.errors.mobileNumber ? (
            <div className="m-error">{formikMagzine.errors.mobileNumber}</div>
          ) : null}
        </div>
        <div className={"street-align"}>
          <p className={"name-heading"}>Street Address</p>
          <input
            className={"input-sizes"}
            type={"text"}
            {...formikMagzine.getFieldProps("address")}
          />
          {formikMagzine.touched.address && formikMagzine.errors.address ? (
            <div className="m-error">{formikMagzine.errors.address}</div>
          ) : null}
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>Postal/Zip code</p>
          <input
            className={"input-sizes number-input"}
            type={"number"}
            {...formikMagzine.getFieldProps("postalCode")}
          />
          {formikMagzine.touched.postalCode &&
          formikMagzine.errors.postalCode ? (
            <div className="m-error">{formikMagzine.errors.postalCode}</div>
          ) : null}
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>State</p>
          <div className={"input-sizes"}>
            <Dropdown />
          </div>
        </div>
        <div className="btn-submit-align">
          <h1 className="sub-heading">Subscription</h1>
          <button type="submit" className="button-submit btn-save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default MagazineForm;
