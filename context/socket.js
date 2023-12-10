import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export function useSocket() {
  const socket = useContext(SocketContext);
  return socket;
}

export function SocketProvider({ children }) {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const connection = io();
    setConnection(connection);
  }, []);

  connection?.on("connect_error", async (err) => {
    console.log("Error establishing connection");
    await fetch("api/socket");
  });

  return (
    <SocketContext.Provider value={connection}>
      {children}
    </SocketContext.Provider>
  );
}
