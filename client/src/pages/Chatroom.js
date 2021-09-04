import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import chatsvg from "../assets/chatroom.svg";
import ChatWindow from "./ChatWindow";
function Chatroom({ socket }) {
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const [room, setRoom] = useState("");
  const history = useHistory();
  const joinRoomstudent = () => {
    console.log("sds");
    if (username !== "") {
      socket.emit("join_room", "student");
      setShowChat(true);
      // history.push("/chatwindow")
    } else {
      alert("username is must !");
      // window.location.reload();
    }
  };
  const joinRoomteacher = () => {
    if (username !== "") {
      socket.emit("join_room", "teacher");
      setShowChat(true);
    } else {
      alert("username is must !");
      // window.location.reload();
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        {" "}
        <div className="text-3xl text-white font-extralight ml-48 mt-8">
          Chatroom <button  onClick={()=>setShowChat(!showChat)} className={`${showChat?"":"hidden"} bg-tertiary p-1 rounded-xl`}>Go back</button>
        </div>
        {!showChat ? (
          <div className="flex justify-around mt-16">
            <div className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight ">
              <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                <button
                  onClick={() => {
                    joinRoomteacher();
                    setRoom("teacher");
                  }}
                >
                  Join Teacher
                </button>
              </div>
            </div>
            <div className="h-36 w-40 bg-secondary rounded-2xl cursor-pointer">
              <div className=" flex justify-center h-full items-center font-medium">
                <input
                  placeholder="Input your user name"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="h-64 w-80  bg-secondary rounded-2xl cursor-pointer   active:bg-highlight">
              <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                <button
                  onClick={() => {
                    joinRoomstudent();
                    setRoom("student");
                  }}
                >
                  Join Student
                </button>
              </div>
            </div>{" "}
          </div>
        ) : (
          <ChatWindow socket={socket} username={username} room={room} />
        )}
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