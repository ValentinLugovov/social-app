import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profileBlock}>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
