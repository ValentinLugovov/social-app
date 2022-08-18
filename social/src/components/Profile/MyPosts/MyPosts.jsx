import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreater,
  updatePostTextActionCreater,
} from "../../../redux/state";

const MyPosts = (props) => {
  let posts = props.profilePage.post.map((p) => (
    <Post message={p.name} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };

  let changePost = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostTextActionCreater(text));
  };

  return (
    <div>
      my post
      <div>
        <div>
          <textarea
            onChange={changePost}
            ref={newPostElement}
            value={props.profilePage.postText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>New post</div>
      <div className={c.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
