import React from "react";
import { useNavigate } from "react-router-dom";

const Logged = () => {
  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.removeItem('auth')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('username')
    navigate('/')
    location.reload()
  }

  const mySpace = () => {
    navigate('/mySpace')
  }

  return (
    <>
      <button id="myspace" onClick={mySpace}>My Space</button>
      <button id="log-out" onClick={logout}>Log out</button>
    </>
  );
};

export default Logged;
