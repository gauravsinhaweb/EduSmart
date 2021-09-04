import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import chatsvg from "../assets/chatroom.svg";
import ChatWindow from "./ChatWindow";
function Chatroom(props) {
  const { socket, username, setUsername } = props;
  // const [username, setUsername] = useState("");
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
        <div className="text-3xl text-white font-extralight ml-40 m mt-8">
          Chatroom{" "}
        </div>
        {!showChat ? (
          <div className="flex justify-around mt-16">
            <div
              onClick={() => {
                joinRoomteacher();
                setRoom("teacher");
              }}
              className="h-64 w-80 bg-secondary rounded-2xl cursor-pointer 	active:bg-highlight "
            >
              <div className="text-white text-2xl flex justify-center h-full items-center font-medium">
                Teacher
              </div>
            </div>
            <div className="h-64 w-80  bg-secondary rounded-2xl cursor-pointer   active:bg-highlight">
              <div
                onClick={() => {
                  joinRoomstudent();
                  setRoom("student");
                }}
                className="text-white text-2xl flex justify-center h-full items-center font-medium"
              >
                Student
              </div>
            </div>{" "}
          </div>
        ) : (
          <ChatWindow socket={socket} username={username} room={room} />
        )}
        <div className="flex justify-around  mt-16 opacity-90">
          <div></div>
          <div> {!showChat ? <img src={chatsvg} alt="chatroom" /> : null}</div>
        </div>
      </div>
    </>
  );
}

export default Chatroom;
