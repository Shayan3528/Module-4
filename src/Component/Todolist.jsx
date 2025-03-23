import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function TodoList() {
  const listRef = useRef();
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  function handleChange() {
    const newTodo = { id: nextId++, text: text };
 
    flushSync(() => {
        setText("");
      setTodos([...todos, newTodo]);
    });

    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
  return (
    <>
      <button
        onClick={handleChange}
        className="border  border-gray-400 rounded px-4 m-3 py-0.5"
      >
        Add
      </button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="border border-gray-400 rounded "
      />

      <ul ref={listRef} className="ml-18">
        {todos.map((todo) => (
          <li key={todo.id}> {todo.text}</li>
        ))}
      </ul>
    </>
  );
}

let nextId = 0;
let initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: "Todo #" + (i + 1),
  });
}
