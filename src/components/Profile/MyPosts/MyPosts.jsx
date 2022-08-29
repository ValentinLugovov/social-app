import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.posts.map((p) => (
    <Post message={p.name} key={p.id} likeCount={p.likeCount} />
  ));

  let onSendPost = () => {
    props.addPost();
  };

  let onChangePost = (event) => {
    let text = event.target.value;
    props.changePost(text);
  };

  return (
    <div>
      <div className={s.postHeader}>new post</div>
      <div>
        <div className={s.textarea}>
          <textarea
            className={s.newPost}
            onChange={onChangePost}
            value={props.postText}
          />
        </div>
        <div className={s.button}>
          <button className={s.sendPost} onClick={onSendPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.postHeader}>my posts</div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
