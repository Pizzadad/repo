import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MenuApp from "../Components/MenuApp";
import TwentySixPage from "../Components/TwentySixPage";
import BatmanPage from "../Components/BatmanPage";
import AboutPage from "../Components/AboutPage";


const RouterBase = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuApp />}/>
        <Route path="repo" element={<MenuApp />}>
          <Route path="app">
            <Route path="26-06-2022" element={<TwentySixPage />}/>
            <Route path="batman" element={<BatmanPage />}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="*" element={<div className="flex justify-center" ><p className="font-lobster text-4xl font-semibold  text-gray-700">Selecciona una opción del Menu</p></div>}/>
          </Route> 
          <Route path="*" element={<div className="flex justify-center items-center" ><Link to="repo/app" className=" font-lobster text-5xl mr-5 font-semibold text-amber-800 no-underline  hover:text-black hover:underline">Ver Menú</Link></div>}/>       
        </Route>
        <Route path="*" element={<div className="flex justify-center items-center" ><Link to="repo/app" className=" font-lobster text-5xl mr-5 font-semibold text-amber-800 no-underline  hover:text-black hover:underline">Ver Menú</Link></div>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterBase;
