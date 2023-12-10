import { useSocket } from "@/context/socket";
import { useEffect, useState } from "react";

export default function Home() {
  const socket = useSocket();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log("Socket connected on client", socket.id);
    });
  }, [socket]);

  return <h1>Socket connection</h1>;
}
