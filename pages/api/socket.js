import { Server } from "socket.io";

function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Socket server is already connected");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Socket connected on backend");
    });
  }
  res.end();
}

export default SocketHandler;
