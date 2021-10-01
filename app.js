const express = require("express");
const app = express();
const socket = require("socket.io");
// const color = require("colors");
const cors = require("cors");
const PORT = 8080;

app.use(express());
app.use(cors());

const server = app.listen(PORT, () => {
  console.log("server is running at port ", PORT);
});

const io = socket(server);
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    // store the received data to be used later. (example: on disconnect)
    socket.user = data;
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  }); 

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    // We can get the user data stored on socket object. (like username)
    console.log(`${socket.user} has left the chatroom.`);
  });
});

// io.on("connection", (socket) => {
//   socket.on("joinRoom", ({ username, roomname }) => {
//     //* create user
//     const p_user = join_User(socket.id, username, roomname);
//     console.log(socket.id, "=id");
//     socket.join(p_user.room);
//     //display a welcome message to the user who have joined a room
//     socket.emit("message", {
//       userId: p_user.id,
//       username: p_user.username,
//       text: `Welcome ${p_user.username}`,
//     });
//     //displays a joined room message to all other room users except that particular user

//     socket.broadcast.to(p_user.room).emit("message", {
//       userId: p_user.id,
//       username: p_user.username,
//       text: `${p_user.username} has joined the chat`,
//     });
//   });

//   //user sending message
//   socket.on("chat", (text) => {
//     //gets the room user and the message sent
//     const p_user = get_Current_User(socket.id);

//     io.to(p_user.room).emit("message", {
//       userId: p_user.id,
//       username: p_user.username,
//       text: text,
//     });
//   });

//   //when the user exits the room
//   socket.on("disconnect", () => {
//     //the user is deleted from array of users and a left room message displayed
//     const p_user = user_Disconnect(socket.id);
//     console.log(p_user);
//     if (p_user) {
//       io.to(p_user.room).emit("message", {
//         userId: p_user.id,
//         username: p_user.username,
//         text: `${p_user.username} has left the room`,
//       });
//     }
//   });
// });
