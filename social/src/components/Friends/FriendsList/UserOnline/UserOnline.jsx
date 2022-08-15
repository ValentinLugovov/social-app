import React from "react";
import s from "./userOnline.module.css";
import { NavLink } from "react-router-dom";

const UserOnline = (props) => {
  let path = "friends/" + props.id;

  return (
    <NavLink to={path}>
      <img src={props.img} className={s.img} />
    </NavLink>
  );
};

export default UserOnline;
