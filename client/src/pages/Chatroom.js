import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ChatRoomIcon } from "../assets/icons";
import { ChatWindow } from "./";
import Card from "../assets/Card";

export function Chatroom(props) {
  const { socket } = props;
  const location = useLocation();

  console.log(socket);
  const [username, setUsername] = useState("");
  // if (location.state) setUsername(location.state.username);
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
  useEffect(() => {
    if (location.state) setUsername(location.state.username);
  }, [username]);
  return (
    <>
      <div className="w-full ">
        <div className="text-3xl text-white font-extralight m mt-8 text-center">
          Chatroom
        </div>
        {!showChat ? (
          <div className="flex justify-around mt-16">
            <div
              onClick={() => {
                joinRoomteacher();
                setRoom("teacher");
              }}
            >
              <Card title="Teacher" />
            </div>
            <div
              onClick={() => {
                joinRoomstudent();
                setRoom("student");
              }}
            >
              <Card title = "Student" />
            </div>
          </div>
        ) : (
          <ChatWindow socket={socket} username={username} room={room} />
        )}
        <div className="flex justify-around  mt-16 opacity-90">
          <div></div>
          <div> {!showChat ? <ChatRoomIcon /> : null}</div>
        </div>
      </div>
    </>
  );
}
