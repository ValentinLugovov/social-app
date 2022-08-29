import React, { useEffect, useState } from "react";
import s from "./friends.module.css";
import * as axios from "axios";
import user from "../../img/1500.jpg";

class Friends extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div className={s.friendsList}>
        {this.props.friends.map((u) => (
          <div key={u.id}>
            <div className={s.user}>
              <div className={s.photoBlock}>
                <img
                  src={u.photos.small !== null ? u.photos.small : user}
                  className={s.img}
                ></img>
              </div>

              <div className={s.nameBlock}>
                <div className={s.fullname}>{u.name}</div>
                <div className={s.status}>{u.status}</div>
              </div>

              <div className={s.locationBlock}>
                <div className={s.location}>{"u.location.city"}</div>
                <div className={s.location}>{"u.location.country"}</div>
              </div>
            </div>
            <div className={s.btns}>
              {u.followed ? (
                <button
                  className={s.button}
                  onClick={() => this.props.unfollow(u.id)}
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  className={s.button}
                  onClick={() => this.props.follow(u.id)}
                >
                  FOLLOW
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
