import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import io from "socket.io-client";

import {
  AnimalCellExplore,
  Boeing777Explore,
  TurbofanExplore
} from "./components/3DExplore";

import AeroSpace from "./components/AeroSpace";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import Medical from "./components/Medical";
import Planets from "./components/Planets";

import {
  About,
  Classroom,
  Contributors,
  Faq,
  Home,
  Chatroom,
  Chat,
  LoginPage
} from "./pages";
import { ScrollToTop } from "./ScrollToTop";
const Routes = () => {
  const [onHover, setOnHover] = useState(false);

  const socket = io.connect("/");
  socket.on("connect", function() {
    console.log(socket.id);
  });

  return (
    <Router>
      <Switch>
        <div className="font-serif select-none	bg-primary flex">
          <Navbar onHover={onHover} setOnHover={setOnHover} />
          <div className="w-5/6 mx-auto">
            {/* PAGES */}
            <ScrollToTop />

            <Route path="/" exact component={About} />
            {/* <Route path="/login" exact component={LoginPage} /> */}
            <ScrollToTop />
            <Route path="/home" exact component={Home} />
            <ScrollToTop />
            <Route exact path="/chatroom">
              <Chatroom socket={socket} />
            </Route>
            <ScrollToTop />
            <Route exact path="/chat">
              <Chat socket={socket} />
            </Route>

            {/* CLASSROOM */}

            <Route path="/classroom" exact component={Classroom} />
            <ScrollToTop />

            <Route path="/medical" exact component={Medical} />
            <ScrollToTop />

            <Route
              path="/animalCellExplore"
              exact
              component={AnimalCellExplore}
            />
            <ScrollToTop />

            <Route
              path="/boeing777Explore"
              exact
              component={Boeing777Explore}
            />
            <ScrollToTop />

            <Route path="/faq" exact component={Faq} />
            <ScrollToTop />
            <Route path="/turbofanExplore" exact component={TurbofanExplore} />
            <ScrollToTop />

            <Route path="/aerospacePage" exact component={AeroSpace} />
            <ScrollToTop />

            <Route path="/contributors" exact component={Contributors} />
            <ScrollToTop />

            <Route path="/Planets" exact component={Planets} />
            <Chatbot />
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default Routes;
