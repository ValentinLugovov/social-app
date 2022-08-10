import React from "react";
import s from "./Post.module.css";
import user1 from "../../../../img/769.jpg";
// import user2 from "../../../img/897.jpg";
// import user3 from "../../../img/1299.jpg";
// import user4 from "../../../img/1500.jpg";
// import user5 from "../../../img/2038.jpg";
// import user6 from "../../../img/3857.jpg";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={user1}></img>
      {props.message}
      <div>
        <span>like {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
