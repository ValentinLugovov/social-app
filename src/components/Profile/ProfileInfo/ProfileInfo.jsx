import React from "react";
import s from "./profileInfo.module.css";
import avatar from "../../../img/avatar.jpeg";
import user from "../../../img/users.jpeg";
import bg1 from "../../../img/bg.jpeg";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.profileBlock}>
        <img src={bg1} className={s.bg} alt="bgimg"></img>
      </div>
      {/* <img src={avatar} className={s.avatar} alt="avatar"></img> */}
      <div className={s.aboutMe}></div>
      <img
        src={
          props.profile.photos.large !== null
            ? props.profile.photos.large
            : user
        }
        alt="avatar"
        className={s.userPhoto}
      ></img>
      <p>{props.profile.fullName}</p>
    </div>
  );
};

export default ProfileInfo;
