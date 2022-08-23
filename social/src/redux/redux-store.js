import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  users: usersReducer,
  friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;
