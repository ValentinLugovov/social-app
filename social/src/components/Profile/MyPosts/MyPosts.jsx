import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.posts.map((p) => (
    <Post message={p.name} likeCount={p.likeCount} />
  ));
  return (
    <div>
      my post
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div>New post</div>
      <div className={c.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
