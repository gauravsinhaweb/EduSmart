import React from "react";
import { Link } from "react-router-dom";
import chatsvg from "../assets/chatroom.svg";
function Classroom() {
  return (
    <>
      <div className="w-full h-screen">
        {" "}
        <div className="text-3xl text-white font-extralight ml-48 mt-8">
          Classroom
        </div>{" "}
        <div className="flex justify-around mt-16">
          <Link to="mediaclPage">
            <div className="h-64 w-64 bg-secondary rounded-2xl cursor-pointer active:bg-green-700 select-none	">
              <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                Medical
              </div>
            </div>
          </Link>

          <Link to="aerospacePage">
            <div className="h-64 w-64 bg-secondary rounded-2xl cursor-pointer active:bg-green-700 select-none">
              <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                Aerospace <br /> Engineering
              </div>
            </div>{" "}
          </Link>
        </div>
        <div className="flex justify-around  mt-16 opacity-60">
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

export default Classroom;
