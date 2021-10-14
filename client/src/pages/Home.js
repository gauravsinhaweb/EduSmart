import React from "react";
import Chatroom from "./Chatroom";
import About from "./About";
import Classroom from "./Classroom";
import Contributors from "./Contributors";

const Home = () => {
  return (
    <>
      <div className="flex flex-col	">
        <div>
          <About />
        </div>
        <div>
          <Classroom />
        </div>
        <div>
          <Chatroom />
        </div>
        <div>
          <Contributors />
        </div>
      </div>
    </>
  );
};

export default Home;
