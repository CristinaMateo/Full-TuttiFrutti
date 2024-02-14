import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
<nav>
  <Link className={'link'} to='/'>Home</Link>
  <Link className={'link'} to='/charts'>Estadísticas</Link>
  <Link className={'link'} to='/opciones'>Combos Frutales</Link>
</nav>
  );
};

export default Nav;
