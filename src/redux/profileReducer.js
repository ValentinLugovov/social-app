const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, name: "I'm learning GIT now...", likeCount: "10" },
    { id: 2, name: "Nice day for working!!!", likeCount: "3" },
  ],
  postText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postText: "",
        posts: [{ id: 3, name: state.postText, likeCount: 0 }, ...state.posts],
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        postText: action.newText,
      };

    default:
      return state;
  }
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updatePostTextActionCreater = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});

export default profileReducer;
