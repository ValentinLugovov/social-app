import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, BrowserRouter, Routes } from "react-router-dom";

let dialogsData = [
  { id: 1, name: "Will Smith" },
  { id: 2, name: "Elon Musk" },
  { id: 3, name: "Miley Cyrus" },
  { id: 4, name: "Eren Yeager" },
  { id: 5, name: "Vladimir Lenin" },
];

let messagesData = [
  { id: 1, message: "Are watching my new film?" },
  { id: 2, message: "Nice try, but my Tesla..." },
  { id: 3, message: "May be u want go to the concert?" },
  { id: 4, message: "AAAAAAaaaaAaAaaaA!!!!1!!1" },
  { id: 5, message: "Я на бронивичке, жду тебя..." },
];

let postsData = [
  { id: 1, name: "What are u doing tonight?", likeCount: "10" },
  { id: 2, name: "Hey, how r u?", likeCount: "3" },
];
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs dialogs={dialogsData} messages={messagesData} />
              }
            />
            <Route path="/profile" element={<Profile posts={postsData} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
