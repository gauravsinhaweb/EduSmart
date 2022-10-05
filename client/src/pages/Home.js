import React from "react";
import { About, Chatroom, Classroom, Contributors } from "../pages";

export const Home = () => {
  return (
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
  );
};
