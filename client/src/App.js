import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import io from "socket.io-client";
import {
  AnimalCellExplore,
  Boeing777Explore,
  TurbofanExplore
} from "./components/3DExplore";
import { AreoSpace, Chatbot, Navbar, Medical, Planets } from "./components";
import {
  Contributors,
  Home,
  Chat,
  About,
  Chatroom,
  Classroom,
  LoginPage
} from "./pages";
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
          {/* <Route path="/" exact component={LoginPage} />{" "} */}
          <div
            className="font-serif select-none	bg-primary flex"
            // onClick={() => {
            //   setOnHover(!onHover);
            // }}
          >
            <Navbar onHover={onHover} setOnHover={setOnHover} />
            <div className="w-5/6 mx-auto">
              <Route path="/login" exact component={LoginPage} />

              <Route path="/" exact component={About} />
              <Route path="/home" exact component={Home} />
              {/* <Route path="/chat" exact component={Chat} /> */}

              {/* <Route path="/chat" exact component={Chatroom} /> */}
              <Route exact path="/chatroom">
                <Chatroom socket={socket} />
              </Route>
              <Route exact path="/chat">
                <Chat socket={socket} />
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
              <Route
                path="/turbofanExplore"
                exact
                component={TurbofanExplore}
              />
              <Route path="/aerospacePage" exact component={AreoSpace} />
              <Route path="/contributors" exact component={Contributors} />
              <Route path="/Planets" exact component={Planets} />
              <Chatbot />
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
