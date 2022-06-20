import React from "react";
import {  Routes, Route, Link, HashRouter } from "react-router-dom";
import MenuApp from "../Components/MenuApp";
import TwentySixPage from "../Components/TwentySixPage";
import BatmanPage from "../Components/BatmanPage";
import AboutPage from "../Components/AboutPage";


const RouterBase = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<div className="flex justify-center items-center" ><Link to="app" className=" font-lobster text-5xl mr-5 font-semibold text-amber-800 no-underline  hover:text-black hover:underline">Ver Menú</Link></div>}/>
        
          <Route path="app" element={<MenuApp />}>
            <Route path="26-06-2022" element={<TwentySixPage />}/>
            <Route path="batman" element={<BatmanPage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="*" element={<div className="flex justify-center" ><p className="font-lobster text-4xl font-semibold  text-gray-700">Selecciona una opción del Menu</p></div>}/>
          </Route> 
        
        <Route path="*" element={<div className="flex justify-center items-center" ><Link to="app" className=" font-lobster text-5xl mr-5 font-semibold text-amber-800 no-underline  hover:text-black hover:underline">Ver Menú</Link></div>}/>
      </Routes>
    </HashRouter>
  );
};

export default RouterBase;
