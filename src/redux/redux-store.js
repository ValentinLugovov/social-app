import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  users: usersReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
