import React from "react";
import { Link, Outlet } from "react-router-dom";

const MenuApp = () => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-orange-200  to-orange-300">    
      <header className="text-black ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col items-center space-y-4">
          <div className="flex title-font font-medium items-center text-amber-800 mb-2 md:mb-0">    
            <p className="font-lobster text-5xl font-semibold">Menu</p>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/*<Link to="26-06-2022" className="font-lobster text-xl mr-5 font-semibold text-amber-800 no-underline  hover:text-black hover:underline">26-06-2022</Link>*/}
            <Link to="about" className="font-lobster text-xl mr-5 font-semibold text-amber-800 no-underline  hover:text-black hover:underline">About</Link>
            <Link to="batman" className="font-lobster text-xl mr-5 font-semibold text-amber-800 no-underline  hover:text-black hover:underline">Batman 🐶</Link>
            <Link to="memories" className="font-lobster text-xl mr-5 font-semibold text-amber-800 no-underline  hover:text-black hover:underline">Memories 😵</Link>
          </nav>       
        </div>
      </header>
      
      <main className="container  mx-auto px-5 pb-3">
        <Outlet />
      </main>
    </div>
  );
};

export default MenuApp;
