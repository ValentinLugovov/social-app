import React from "react";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";
import FriendsList from "../Friends/FriendsList/FriendsList";

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

const Navbar = (props) => {
  return (
    <div className={s.nav}>
      <Link path="/profile" name="Profiles" />
      <Link path="/dialogs" name="Messages" />
      <Link path="/news" name="News" />
      <Link path="/music" name="Music" />
      <Link path="/settings" name="Settings" />
      <FriendsList users={props.state.users} />
    </div>
  );
};

export default Navbar;
