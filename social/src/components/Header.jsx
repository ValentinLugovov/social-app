import React from "react";
import h from "./header.module.css";
import logo from "../img/github.png";

const Header = () => {
  return (
    <div className={h.header}>
      <img className={h.logo} src={logo}></img>
    </div>
  );
};

export default Header;
