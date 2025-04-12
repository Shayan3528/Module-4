// import { useState } from "react";
// import ChatRoom from "./Component/ChatRoom";

// export default function App() {
//   const [showModal, setShowModal] = useState(true);
//   const [roomId, setRoomId] = useState("general");
//   const [serverUrl, setServerUrl] = useState("https://localhost:1234");

//   return (
//     <div className="relative ml-10 mt-10 w-[400px] h-[400px] border border-gray-500 rounded  shadow-xl ">
//       <button
//         className="px-3  bg-blue-500 text-white rounded mt-5 ml-5"
//         onClick={() => setShowModal(!showModal)}
//       >
//         {showModal ? "Hide Modal" : "Show Modal"}
//       </button>
//       <hr className="mx-5 mt-2 border-gray-400 " />

//       <div>
//         <input
//           type="text"
//           value={serverUrl}
//           onChange={(e) => setServerUrl(e.target.value)}
//           placeholder="Enter server Url"
//           className="border border-gray-400 rounded px-3 mx-5 my-5"
//         />
//       </div>

//       {showModal && (
//         <div className="absolute top-30 left-5 right-5 w-3/4 h-2/4 bg-gray-200 shadow-2xl">
//           <select
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//             className="mx-2 my-2 border border-gray-400 px-3 rounded focus:outline-none focus:border-green-500 focus:border-2 bg-gray-100 "
//           >
//             <option value="General">General</option>
//             <option value="Travel">Travel</option>
//             <option value="Music">Music</option>
//           </select>

//           <div className="mx-3 flex justify-center itens-center mt-10">
//             <ChatRoom roomId={roomId} serverUrl={serverUrl} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useRef } from "react";

// export default function App() {
//   let ref = useRef(0);
//   function handleClick() {
//     ref.current = ref.current + 1;
//     console.log(ref.current);
//   }

//   return (
//     <>
//       <button
//         onClick={handleClick}
//         className=" border border-gray-400 px-2 rounded"
//       >
//         {" "}
//         Click me{" "}
//       </button>

//       <p> {ref.current}</p>
//     </>
//   );
// }

import {  useState } from "react";
import { createTodo, initialTodos } from "./Utlis/todo";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <div className="border border-gray-400 rounded shadow-xl w-[350px] h-auto ml-45 mt-45 px-10 py-3">
      <label className="flex  gap-2 py-1">
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />{" "}
      {/** Create new Todo */}
      <ul className="px-6 py-2">
        {visibleTodos.map((todo) => (
          <li key={todo.id} className="list-disc ">
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {activeTodos.length} todos left 
      </footer>
    </div>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleAddClick() {
    setText("");
    onAdd(createTodo(text));
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-400 rounded px-2 mr-3"
      />
      <button
        className="border border-gray-400 rounded  px-3"
        onClick={handleAddClick}
      >
        Add
      </button>
    </>
  );
}
