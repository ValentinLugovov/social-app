import React from "react";
import s from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";
import jpg from "../../../img/769.jpg";
import Message from "../Message/Message";

const DialogItem = (props) => {
  let path = "dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <img src={jpg} className={s.img}></img>
      <NavLink
        to={path}
        className={(navData) => (navData.isActive ? s.active : s.name)}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
