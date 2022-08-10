import React from "react";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";

const Link = (props) => {
  return (
    <div className={s.item}>
      <NavLink
        to={props.path}
        className={(navData) => (navData.isActive ? s.active : s.item)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className={s.nav}>
      <Link path="/profile" name="Profiles" />
      <Link path="/dialogs" name="Messages" />
      <Link path="/news" name="News" />
      <Link path="/music" name="Music" />
      <Link path="/settings" name="Settings" />
    </div>
  );
};

export default Navbar;
