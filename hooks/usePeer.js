const { useState, useEffect } = require("react");

function usePeer() {
  const [peerId, setPeerId] = useState();
  const [myId, setMyId] = useState();

  useEffect(() => {
    (async function initPeer() {
      const peer = new (await import("peerjs")).default();
    })();
  }, []);
}

export default usePeer;
