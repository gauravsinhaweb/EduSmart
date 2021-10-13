import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ChatRoomIcon } from "../assets/icons";
import Card from "../components/Card";
import ChatWindow from "./ChatWindow";

const Chatroom = ({ socket }) => {
  const location = useLocation();

  console.log(socket);
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const [room, setRoom] = useState("");
  const history = useHistory();
  const joinRoomstudent = () => {
    console.log("sds");
    if (username !== "") {
      socket.emit("join_room", "student");
      setShowChat(true);
    } else {
      alert("username is must !");
    }
  };
  const joinRoomteacher = () => {
    if (username !== "") {
      socket.emit("join_room", "teacher");
      setShowChat(true);
    } else {
      alert("username is must !");
    }
  };
  useEffect(() => {
    if (location.state) setUsername(location.state.username);
  }, [username]);
  return (
    <>
      <div className="w-full chatroom">
        <div className="text-3xl text-white font-extralight m mt-8 text-center">
          Chatroom
        </div>
        {!showChat ? (
          <div className="flex justify-center items-center lg:justify-around lg:flex-row flex-col mt-16">
            <div
              onClick={() => {
                joinRoomteacher();
                setRoom("teacher");
              }}
              className="my-5 w-5/6 ">
              <Card title="Teacher" />
            </div>
            <div
              onClick={() => {
                joinRoomstudent();
                setRoom("student");
              }}
              className="my-5 w-5/6">
              <Card title="Student" />
            </div>
          </div>
        ) : (
          <ChatWindow socket={socket} username={username} room={room} />
        )}
      </div>
    </>
  );
};

export default Chatroom;
