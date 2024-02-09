import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home'
import Combos from './Combos'
import Stats from './Stats'

const Main = () => {
  return (
    <main>
<Routes>
  <Route path="/" element={<Home/>}/> 
  <Route path="/charts" element={<Stats/>}/> 
  <Route path="/opciones" element={<Combos/>}/> 
  <Route path="/" element={<Navigate to={"/"} />}/> 
</Routes>
    </main>
  );
};

export default Main;
