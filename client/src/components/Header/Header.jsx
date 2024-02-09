import React from "react";
import Logged from "./Logged/Logged";
import { whoIsLogged } from "../Main/Authentication/utils";


const Header = () => {
  const loggedUser = whoIsLogged()

  return (
    <>
      <nav>
        {loggedUser && <Logged/>}
        <button id="signup-login">Sign up / Log in</button>
      </nav>
      <header>My Tutti Frutti App</header>
    </>
  );
};

export default Header;
