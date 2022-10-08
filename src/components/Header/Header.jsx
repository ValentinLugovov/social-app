import React from "react";
import s from "./header.module.css";
import logo from "../../img/github.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <img className={s.logo} src={logo} alt='logo'></img>

      <div className={s.loginBlock}>
        {props.isAuth ? props.login :
        <NavLink to={'/login'} className={s.link}>SIGN IN</NavLink>}
      </div>
    </div>
  );
};

export default Header;
