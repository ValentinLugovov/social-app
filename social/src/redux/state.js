import user1 from "../img/769.jpg";
import user2 from "../img/1299.jpg";
import user3 from "../img/3857.jpg";
import user4 from "../img/1500.jpg";
import user5 from "../img/2038.jpg";
import user6 from "../img/897.jpg";

const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let store = {
  _state: {
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
        { id: 5, message: "Я на бгронивичке, жду тебя..." },
      ],
      newMessage: "",
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
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        name: this._state.profilePage.postText,
        likeCount: 0,
      };
      this._state.profilePage.post.push(newPost);
      this._state.profilePage.postText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST_TEXT) {
      this._state.profilePage.postText = action.newText;
      this._callSubscriber(this._state);
    }
    if (action.type === ADD_MESSAGE) {
      let addMessage = {
        id: 6,
        message: this._state.messagesPage.newMessage,
      };
      this._state.messagesPage.message.push(addMessage);
      this._state.messagesPage.newMessage = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE) {
      this._state.messagesPage.newMessage = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });

export const updatePostTextActionCreater = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});
export const updateMessageActionCreater = (text) => ({
  type: UPDATE_MESSAGE,
  newMessage: text,
});

export default store;
