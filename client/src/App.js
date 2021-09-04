import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import io from "socket.io-client";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Chatroom from "./pages/Chatroom";
import Classroom from "./pages/Classroom";
import MediaclPage from "./pages/Medical";
import AeroSpacePage from "./pages/AreoSpace";
import Contributors from "./pages/Contributors";
import Home from "./pages/Home";
import ChatWindow from "./pages/ChatWindow";
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
          {" "}
          <div
            className="font-serif select-none	bg-primary flex"
            // onClick={() => {
            //   setOnHover(!onHover);
            // }}
          >
            <Navbar onHover={onHover} setOnHover={setOnHover} />
            <Route path="/" exact component={About} />
            <Route path="/home" exact component={Home} />
            {/* <Route path="/chat" exact component={Chatroom} /> */}
            <Route exact path="/chat">
              <Chatroom socket={socket} />
            </Route>
            <Route exact path="/chatwindow">
              <ChatWindow socket={socket} />
            </Route>
            <Route path="/classroom" exact component={Classroom} />
            <Route path="/mediaclPage" exact component={MediaclPage} />
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
