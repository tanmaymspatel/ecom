import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="h-52 flex justify-between items-center bg-slate-100 px-20 relative py-11">
      <NavLink to="/">
        <h2 className="uppercase flex gap-2 items-center">
          <p className="text-5xl font-bold text-white bg-indigo-600 p-2">
            ecom
          </p>
          <p className="text-5xl font-bold">store</p>
        </h2>
      </NavLink>
      <div className="flex-grow text-right">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
