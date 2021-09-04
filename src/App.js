import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Chatroom from "./pages/Chatroom";
import Classroom from "./pages/Classroom";
import MediaclPage from "./pages/Medical";
import AnimalCellExplore from "./components/3DExplore/AnimalCellExplore";
import Boeing777Explore from "./components/3DExplore/Boeing777Explore";
import TurbofanExplore from "./components/3DExplore/TurbofanExplore";
import AeroSpacePage from "./pages/AreoSpace";
import Contributors from "./pages/Contributors";
import Home from "./pages/Home";
// import Footer from './components/Footer';

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
            <Route path="/chat" exact component={Chatroom} />
            <Route path="/classroom" exact component={Classroom} />
            <Route path="/mediaclPage" exact component={MediaclPage} />
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
