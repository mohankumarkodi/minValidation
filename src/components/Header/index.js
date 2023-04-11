import React from "react";

import "./index.css";
function Header() {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <ul className="nav-menu">
            <li>
              <button type="button" className="logout-desktop-btn">
                Items
              </button>
            </li>

            <li>
              <button type="button" className="logout-desktop-btn">
                Cart
              </button>
            </li>

            <li>
              <button type="button" className="logout-desktop-btn">
                LogIn
              </button>
            </li>
            <li>
              <button type="button" className="logout-desktop-btn">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
