import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.posts.map((p) => (
    <Post message={p.name} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let changePost = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  };

  return (
    <div>
      my post
      <div>
        <div>
          <textarea
            onChange={changePost}
            ref={newPostElement}
            value={props.postText}
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
