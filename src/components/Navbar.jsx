import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
      </div>
      <div className="options">
        <img src="house-solid.svg" alt="" />
        <img src="filter-solid.svg" alt="" />
        <img src="bell-solid.svg" alt="" />
        <img src="user-solid.svg" alt="" />
        <img src="bars-solid.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
