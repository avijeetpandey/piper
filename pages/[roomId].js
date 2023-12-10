import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";

export default function Room() {
  const socket = useSocket();
  const { peer, myId } = usePeer();
}
