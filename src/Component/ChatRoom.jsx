import { useEffect } from "react";
import createConnection from "../Utlis/createConnection";

const serverUrl = "https://localhost:1234";

export default function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => {
      connection.disconnect();
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
