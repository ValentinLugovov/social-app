import React from "react";
import c from "./profile.module.css";
import avatar from "../img/avatar.jpeg";
import bg1 from "../img/bg.jpeg";

const Profile = () => {
  return (
    <div className={c.content}>
      <div>
        <img src={bg1} className={c.bg}></img>
      </div>
      <div>
        <img src={avatar} className={c.avatar}></img>
      </div>
      <div>
        my post
        <div>New post</div>
      </div>
      <div>
        <div>post1</div>
        <div>post2</div>
        <div>post3</div>
      </div>
    </div>
  );
};

export default Profile;
