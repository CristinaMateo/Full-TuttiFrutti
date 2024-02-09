import React from "react";
import Logged from "./Logged/Logged";
import { whoIsLogged } from "../Main/Authentication/utils";


const Header = () => {
  const loggedUser = whoIsLogged()

  

  return (
    <>
      <section>
        {loggedUser && <Logged />}
        {!loggedUser && <button id="signup-login">Sign up / Log in</button>}
      </section>
      <header>
        <h1>My Tutti Frutti App</h1>
        
      </header>
    </>
  );
};

export default Header;
