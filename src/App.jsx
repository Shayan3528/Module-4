import { useState } from "react";
import ChatRoom from "./Component/ChatRoom";

export default function App() {
  const [showModal, setShowModal] = useState(true);
  const [roomId, setRoomId] = useState("general");

  return (
    <div className="relative ml-10 mt-10 w-[400px] h-[400px] border border-gray-500 rounded  shadow-xl ">
      <button
        className="px-3  bg-blue-500 text-white rounded mt-5 ml-5"
        onClick={() => setShowModal(!showModal)}
      >
        {showModal ? "Hide Modal" : "Show Modal"}
      </button>
      <hr className="mx-5 mt-2 border-gray-400 " />

      {showModal && (
        <div className="absolute top-16 left-5 right-5 w-3/4 h-3/4 bg-gray-200 shadow-2xl">
          <select
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="mx-2 my-2 border border-gray-400 px-3 rounded focus:outline-none focus:border-green-500 focus:border-2 bg-gray-100 "
          >
            <option value="General">General</option>
            <option value="Travel">Travel</option>
            <option value="Music">Music</option>
          </select>

         <div className = "mx-3 flex justify-center itens-center mt-10">
         <ChatRoom roomId={roomId} />
         </div>
        </div>
      )}
    </div>
  );
}
