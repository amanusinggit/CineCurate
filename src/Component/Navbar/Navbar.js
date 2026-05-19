import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex text-celluloid">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-4 px-4 py-2 border hover:text-gold-200  hover:border-solid hover:rounded-md cursor-pointer ${isActive ? "bg-gold-tint border-gold-bright rounded-md text-gold-200" : "border-void"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `mx-4 px-4 py-2 border hover:text-gold-200  hover:border-solid hover:rounded-md cursor-pointer ${isActive ? "bg-gold-tint border-gold-bright rounded-md text-gold-200" : "border-void"}`
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `mx-4 px-4 py-2 border hover:text-gold-200  hover:border-solid hover:rounded-md cursor-pointer ${isActive ? "bg-gold-tint border-gold-bright rounded-md text-gold-200" : "border-void"}`
          }
        >
          List
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
