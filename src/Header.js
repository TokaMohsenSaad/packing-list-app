import React from "react";
import "./App.css";
import { FaSuitcaseRolling, FaPlane } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <FaSuitcaseRolling className="icon" />
      <h1>Far Away</h1>
      <FaPlane className="icon" />
    </div>
  );
};

export default Header;
