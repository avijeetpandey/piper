import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export function useSocket() {
  const socketConnection = useContext(SocketContext);
  return socketConnection;
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const connection = io();
    setSocket(connection);
  }, []);

  socket?.on("connect_error", async (err) => {
    console.log("Error establishing connection", err);
    await fetch("api/socket");
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
