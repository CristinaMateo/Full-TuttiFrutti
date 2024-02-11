import React from "react";
import { useNavigate } from "react-router-dom";
import Logged from "./Logged/Logged";
import { whoIsLogged } from "../Main/Authentication/utils";
import Nav from "./Nav"


const Header = () => {
  const loggedUser = whoIsLogged()
  const navigate = useNavigate()

 const toAuth =()=>{
  navigate('/auth')
 }

  return (
    <>
      <section>
        {loggedUser && <Logged />}
        {!loggedUser && <button id="signup-login" onClick={toAuth}>Sign up / Log in</button>}
      </section>
      <header>
        <h1>My Tutti Frutti App</h1>
        <Nav/>
      </header>
    </>
  );
};

export default Header;
