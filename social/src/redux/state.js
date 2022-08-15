import user1 from "../img/769.jpg";
import user2 from "../img/1299.jpg";
import user3 from "../img/3857.jpg";
import user4 from "../img/1500.jpg";
import user5 from "../img/2038.jpg";
import user6 from "../img/897.jpg";
import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    post: [
      { id: 1, name: "What are u doing tonight?", likeCount: "10" },
      { id: 2, name: "Hey, how r u?", likeCount: "3" },
    ],
    postText: "",
  },
  messagesPage: {
    dialog: [
      { id: 1, name: "Will Smith" },
      { id: 2, name: "Elon Musk" },
      { id: 3, name: "Miley Cyrus" },
      { id: 4, name: "Eren Yeager" },
      { id: 5, name: "Vladimir Lenin" },
    ],
    message: [
      { id: 1, message: "Are watching my new film?" },
      { id: 2, message: "Nice try, but my Tesla..." },
      { id: 3, message: "May be u want go to the concert?" },
      { id: 4, message: "AAAAAAaaaaAaAaaaA!!!!1!!1" },
      { id: 5, message: "Я на бронивичке, жду тебя..." },
    ],
  },
  users: {
    avatar: [
      { id: 1, img: user1, online: true },
      { id: 2, img: user2, online: true },
      { id: 3, img: user3, online: true },
      { id: 4, img: user4, online: true },
      { id: 5, img: user5, online: true },
      { id: 6, img: user6, online: true },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 3,
    name: state.profilePage.postText,
    likeCount: 0,
  };
  state.profilePage.post.push(newPost);
  state.profilePage.postText = "";
  renderEntireTree(state);
};

export let updatePostText = (newText) => {
  state.profilePage.postText = newText;
  renderEntireTree(state);
};

export default state;
