import Example from "./Component/Example3";
import { items1, items2 } from "./Data/itemData";

import { useState } from "react";

export default function App() {
  // const inputRef = useRef();

  const [items, setItems] = useState(items1);

  return (
    <div className=" w-3/4 h-3/4 border ml-10 mt-20 p-5 border-gray-300 rounded shawod-xl">
      {/* <TodoList />
      <Media /> */}
      {/* <SearchButton  onClick = {()=>{
        inputRef.current.focus();

      }}/> */}

      {/* <SearchInput  ref = {inputRef} /> */}

      {/* <Dialog /> */}
      {/* <Scroller /> */}

      {/* <Comment postId="1" />
       */}

      {/* <Example /> */}

      {/* <ProfileSwitch /> */}

      <div className="flex justify-between items-center mb-5 shadow-2xl">
        <button
          onClick={() => setItems(items2)}
          className="border border-gray-400 rounded px-3 "
        >
          Switch to Item 2
        </button>
        {"  "}
        <button
          onClick={() => setItems(items1)}
          className="border border-gray-400 rounded px-3 "
        >
          Switch to Item 1
        </button>
        <br />
      </div>
      <Example items={items} />
    </div>
  );
}
