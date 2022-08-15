import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profileBlock}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.post} addPost={props.addPost} postText={props.profilePage.postText}
      updatePostText={props.updatePostText} />
    </div>
  );
};

export default Profile;
