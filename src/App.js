import React from "react";
import Profile from "./components/Profile";
import ChangePassword from "./components/ChangePassword";
import MagazineForm from "./components/Magazine";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/signUp";
import CollapsibleExample from "./components/Home";
import NotFound from "./NotFoung";
import EmptyCartView from "./components/EmptyCartView";
import NavbarHeader from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div>
      <EmptyCartView />
      <CollapsibleExample />
     
      <NotFound />
      <NavbarHeader />
    </div>
  );
}
export default App;
