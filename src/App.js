import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import io from "socket.io-client";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Chatroom from "./pages/Chatroom";
import Classroom from "./pages/Classroom";
import Medical from "./components/Medical";
import AnimalCellExplore from "./components/3DExplore/AnimalCellExplore";
import Boeing777Explore from "./components/3DExplore/Boeing777Explore";
import TurbofanExplore from "./components/3DExplore/TurbofanExplore";
import AeroSpacePage from "./components/AreoSpace";
import Contributors from "./pages/Contributors";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ChatWindow from "./pages/ChatWindow";
import Chat from "./pages/Chat";
// import Footer from './components/Footer';
const socket = io.connect("/");
socket.on("connect", function() {
  console.log(socket.id);
});
function App() {
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />{" "}
          <div
            className="font-serif select-none	bg-primary flex"
            // onClick={() => {
            //   setOnHover(!onHover);
            // }}
          >
            <Navbar onHover={onHover} setOnHover={setOnHover} />
            <Route path="/about" exact component={About} />
            <Route path="/home" exact component={Home} />
            <Route path="/chat" exact component={Chat} />

            {/* <Route path="/chat" exact component={Chatroom} /> */}
            <Route exact path="/chatroom">
              <Chatroom socket={socket} />
            </Route>
            <Route exact path="/chatwindow">
              <ChatWindow socket={socket} />
            </Route>
            <Route path="/classroom" exact component={Classroom} />
            <Route path="/medical" exact component={Medical} />
            <Route
              path="/animalCellExplore"
              exact
              component={AnimalCellExplore}
            />
            <Route
              path="/boeing777Explore"
              exact
              component={Boeing777Explore}
            />
            <Route path="/turbofanExplore" exact component={TurbofanExplore} />
            <Route path="/aerospacePage" exact component={AeroSpacePage} />
            <Route path="/contributors" exact component={Contributors} />

            <Chatbot />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
