const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        newMessage: "",
        message: [...state.message, { id: 6, message: state.newMessage }],
      };

    case UPDATE_MESSAGE:
      return {
        ...state,
        newMessage: action.newMessage,
      };

    default:
      return state;
  }
};

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });

export const updateMessageActionCreater = (text) => ({
  type: UPDATE_MESSAGE,
  newMessage: text,
});

export default messagesReducer;
