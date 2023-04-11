import React from 'react';
import 'bootstrap';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';
import MagazineForm from './components/Magazine';
import Header from "./components/Header";
import LoginPage from './components/LoginPage';
// import SignUp from './components/SignUp';


import './App.css';

function App() {
  return(
      <div>
          <LoginPage/>
          {/* <SignUp/> */}
          <Header/>
          <Profile/>
          <ChangePassword/>
          <MagazineForm/> 
      </div>

  )

}
export default App;
