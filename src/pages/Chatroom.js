import React from "react";
import chatsvg from "../assets/chatroom.svg";
function Chatroom() {
  return (
    <>
      <div className="w-full h-screen">
        {" "}
        <div className="text-3xl text-white font-extralight ml-40 mt-8">
          Chatroom 💬
        </div>{" "}
        <div className="flex justify-around mt-16">
          <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight ">
            <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
              Teacher 👩‍🏫
            </div>
          </div>
          <div className="h-64 w-80  bg-secondary rounded-2xl cursor-pointer   active:bg-highlight">
            <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
              Student 👨‍🎓
            </div>
          </div>{" "}
        </div>
        <div className="flex justify-around  mt-16 opacity-90">
          <div></div>
          <div>
            {" "}
            <img src={chatsvg} alt="chatroom" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatroom;
