import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Home'
import Combos from './Combos'
import Stats from './Stats'
import MySpace from './Myspace'
import Authentication from './Authentication'

const Main = () => {
  return (
    <main>
<Routes>
  <Route path="/" element={<Home/>}/> 
  <Route path="/auth" element={<Authentication/>} />
  <Route path="/charts" element={<Stats/>}/> 
  <Route path="/opciones" element={<Combos/>}/> 
  <Route path="/mySpace" element ={<MySpace/>}/>
  <Route path="/" element={<Navigate to={"/"} />}/> 
</Routes>
    </main>
  );
};

export default Main;
