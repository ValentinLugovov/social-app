import React from "react";
import s from "./friends.module.css";
import * as axios from "axios";

const Friends = (props) => {
  axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      props.setUsers(response.date.items);
    });

  return (
    <div className={s.friendsList}>
      {props.friendsPage.map((u) => (
        <div key={u.id}>
          <div className={s.user}>
            <div className={s.photoBlock}>
              <img src={u.photo} className={s.img}></img>
            </div>

            <div className={s.nameBlock}>
              <div className={s.fullname}>{u.fullname}</div>
              <div className={s.status}>{u.status}</div>
            </div>

            <div className={s.locationBlock}>
              <div className={s.location}>{u.location.city}</div>
              <div className={s.location}>{u.location.country}</div>
            </div>
          </div>
          <div className={s.btns}>
            {u.followed ? (
              <button className={s.button} onClick={() => props.unfollow(u.id)}>
                UNFOLLOW
              </button>
            ) : (
              <button className={s.button} onClick={() => props.follow(u.id)}>
                FOLLOW
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friends;
