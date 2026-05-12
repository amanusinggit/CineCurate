import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex text-celluloid">
        <li className="mx-4 px-4 py-2 border border-void hover:text-gold-200 hover:bg-gold-tint  hover:border-solid  hover:border-gold-bright hover:rounded-md cursor-pointer">
          Home
        </li>
        <li className="mx-4 px-4 py-2 border border-void hover:text-gold-200 hover:bg-gold-tint  hover:border-solid  hover:border-gold-bright hover:rounded-md cursor-pointer">
          Search
        </li>
        <li className="mx-4 px-4 py-2 border border-void hover:text-gold-200 hover:bg-gold-tint  hover:border-solid  hover:border-gold-bright hover:rounded-md cursor-pointer">
          List
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
