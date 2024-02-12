import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
<nav>
  <ul>
  <li><Link className={'link'} to='/'>Home</Link></li>
  <li><Link className={'link'} to='/charts'>Estadísticas</Link></li>
  <li><Link className={'link'} to='/opciones'>Combos Frutales</Link></li>
  </ul>
</nav>
  );
};

export default Nav;
