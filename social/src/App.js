import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import store from "./redux/redux-store";
import FriendsContainer from "./components/Friends/FriendsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar state={store.getState().users} />
        <div className="app-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<DialogsContainer store={store} />}
            />
            <Route path="/profile" element={<Profile store={store} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<FriendsContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
