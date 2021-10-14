import React, { useState, useEffect, useRef } from "react";

const ChatWindow = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes()
      };

      await socket.emit("send_message", messageData);
      setMessageList(list => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  console.log(messageList);
  useEffect(() => {
    socket.on("receive_message", data => {
      setMessageList(list => [...list, data]);
    });
  }, [socket]);

  const messagesListEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesListEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messageList]);
  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat 🟢</p>
      </div>
      <div className="chat-body overflow-y-auto">
        {messageList.map(messageContent => {
          return (
            <div
              className="message"
              id={username === messageContent.author ? "you" : "other"}>
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesListEndRef} />
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={event => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={event => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default ChatWindow;
