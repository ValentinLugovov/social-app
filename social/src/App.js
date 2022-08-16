import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar state={props.state.users} />
        <div className="app-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  messagesPage={props.state.messagesPage}
                  addMessage={props.addMessage}
                  updateMessage={props.updateMessage}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updatePostText={props.updatePostText}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
