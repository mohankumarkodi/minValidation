import React from "react";
import Profile from "./components/Profile";
import ChangePassword from "./components/ChangePassword";
import MagazineForm from "./components/Magazine";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/signUp";
import CollapsibleExample from "./components/navBar";

import "./App.css";

function App() {
  return (
    <div>

      <CollapsibleExample />
      <LoginPage />
      <SignUp />
      <Profile />
      <ChangePassword />
      <MagazineForm />
    </div>
  );
}
export default App;
