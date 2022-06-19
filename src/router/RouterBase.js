import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuApp from "../Components/MenuApp";
import TwentySixPage from "../Components/TwentySixPage";
import BatmanPage from "../Components/BatmanPage";
import AboutPage from "../Components/AboutPage";


const RouterBase = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuApp />}/>
        <Route path="app" element={<MenuApp />}>
          <Route path="26-06-2022" element={<TwentySixPage />}/>
          <Route path="batman" element={<BatmanPage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="*" element={<MenuApp />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterBase;
