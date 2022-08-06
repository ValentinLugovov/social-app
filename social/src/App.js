import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
