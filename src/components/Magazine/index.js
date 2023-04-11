import React from "react";
import Dropdown from "../DropDown";
import "./index.css";
function MagazineForm() {
  return (
    <div>
      <div>
        <h1>Magazine Request Forms</h1>
      </div>
      <div className={"magazine-container"}>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>FirstName</p>
          <input className={"input-sizes"} type={"text"} />
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>Last Name</p>
          <input className={"input-sizes"} type={"text"} />
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>Email</p>
          <input className={"input-sizes"} type={"email"} />
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>Phone Number</p>
          <input className={"input-sizes number-input"} type={"number"} />
        </div>
        <div className={"street-align"}>
          <p className={"name-heading"}>Street Address</p>
          <input className={"input-sizes"} type={"text"} />
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>Postal/Zip code</p>
          <input className={"input-sizes number-input"} type={"number"} />
        </div>
        <div className={"magazine-input-container"}>
          <p className={"name-heading"}>State</p>
          <div className={"input-sizes"}>
            <Dropdown />
          </div>
        </div>
      </div>
      <div>
        <h1>Subscription</h1>
      </div>
    </div>
  );
}
export default MagazineForm;
