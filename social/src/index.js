import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addMessage,
  addPost,
  subscribe,
  updateMessage,
  updatePostText,
} from "./redux/state";
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updatePostText={updatePostText}
        addMessage={addMessage}
        updateMessage={updateMessage}
      />
    </React.StrictMode>
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);
reportWebVitals();
