import { useEffect, useState } from "react";
import { createConnection, sendMessage } from "./Utlis/Chat";

const serverUrl = "https://localhost:1234";

function ChatRoom({roomId}) {
  const [inputText, setInputText] = useState();
  function handleChange(e) {
    e.preventDefault();
    sendMessage(inputText);
    setInputText("");
  }

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <div>
        <p className="mb-2 font-bold "> Welcome to the {roomId}!</p>

        <div>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Message"
            className="border boder-gray-400 rounded px-1 py-0.5 w-[150px]"
          />
          <button
            onClick={handleChange}
            className="border border-gray-400 px-2 ml-4 rounded "
          >
            {" "}
            Send{" "}
          </button>
        </div>
      </div>
    </>
  );
}


export default function App() {
  const [roomId, setRoomId] = useState();
  const [show, setShow] = useState(false);

  return (
    <div className="mt-10 ml-10 border border-gray-400 rounded w-[450px] px-3 py-5 shadow-2xl flex flex-col gap-4">
      <label>
        Choose the Chat room :
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="border border-gray-300 px-3 rounded ml-2 "
        >
          <option>Enter Value</option>
          <option value="Travel">Travel</option>
          <option value="General">General</option>
          <option value="Music">Music</option>
        </select>
        <button
          onClick={() => setShow(!show)}
          className=" border border-gray-300 ml-4 rounded px-3"
        >
          {show ? "Close Chat" : "OpenChat"}
        </button>
      </label>

      <hr className="border-gray-400 " />
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}
