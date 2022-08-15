import React from "react";
import s from "./friendsList.module.css";
import { NavLink } from "react-router-dom";
import UserOnline from "./UserOnline/UserOnline";

const FriendsList = (props) => {
  let users = props.state.avatar.map((u) => {
    return u.online ? <UserOnline id={u.id} img={u.img} /> : "";
  });

  return (
    <div>
      <div className={s.header}>
        <NavLink to="/friends" className={s.friendsText}>
          Friends Online
        </NavLink>
      </div>
      <div className={s.items}>{users}</div>
    </div>
  );
};

export default FriendsList;
