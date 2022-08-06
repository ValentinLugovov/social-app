import React from "react";
import n from "./nav.module.css";

const Navbar = () => {
  return (
    <div className={n.nav}>
      <div>
        <a href="#">Profiles</a>
      </div>
      <div>
        <a href="#">Messages</a>
      </div>
      <div>
        <a href="#">News</a>
      </div>
      <div>
        <a href="#">Music</a>
      </div>
      <div>
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default Navbar;
