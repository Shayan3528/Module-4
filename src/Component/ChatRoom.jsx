import { useEffect } from "react";
import createConnection, { logVisited } from "../Utlis/createConnection";

export default function ChatRoom({ roomId, serverUrl }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) logVisited(roomId);

    return () => {
      ignore = true;
    };
  }, [roomId]);

  return (
    <h1>
      {" "}
      Welcome to the{" "}
      <span className="font-bold bg-green-400 px-2 rounded m-1 ">
        {roomId}{" "}
      </span>{" "}
      Room{" "}
    </h1>
  );
}
