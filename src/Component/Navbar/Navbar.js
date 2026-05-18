import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex text-celluloid">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mx-4 px-4 py-2 border border-void hover:text-gold-200  hover:border-solid hover:rounded-md cursor-pointer ${isActive && "bg-gold-tint border-solid border-gold-bright rounded-md text-gold-200"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `mx-4 px-4 py-2 border border-void hover:text-gold-200  hover:border-solid hover:rounded-md cursor-pointer ${isActive && "bg-gold-tint border-solid border-gold-bright rounded-md text-gold-200"}`
          }
        >
          Search
        </NavLink>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `mx-4 px-4 py-2 border border-void hover:text-gold-200  hover:border-solid hover:rounded-md cursor-pointer ${isActive && "bg-gold-tint border-solid border-gold-bright rounded-md text-gold-200"}`
          }
        >
          List
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
