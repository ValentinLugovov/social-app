import React from "react";
import s from "./../dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "dialogs/" + props.id;

  return (
    <div className={s.dialog}>
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
