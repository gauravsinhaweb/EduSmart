import React from "react";
import About from "./About";
import Chatroom from "./Chatroom";
import Classroom from "./Classroom";
import Contributors from "./Contributors";

function Home() {
  return (
    <>
      <div className="flex flex-col	">
        {" "}
        <div>
          <About />
        </div>
        <div>
          {" "}
          <Classroom />
        </div>
        <div>
          {" "}
          <Chatroom />
        </div>
        <div>
          {" "}
          <Contributors />
        </div>
      </div>
    </>
  );
}

export default Home;
