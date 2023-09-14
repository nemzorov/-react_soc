import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="container">
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <div className="wrapp">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/friends/*" element={<FriendsContainer />} />
            <Route path="/message/*" element={<MessagesContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music/*" element={<MusicContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
