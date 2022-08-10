import React from "react";
import s from "./profileInfo.module.css";
import avatar from "../../../img/avatar.jpeg";
import bg1 from "../../../img/bg.jpeg";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profileBlock}>
        <img src={bg1} className={s.bg}></img>
      </div>
      <div>
        <img src={avatar} className={s.avatar}></img>
      </div>
    </div>
  );
};

export default ProfileInfo;
