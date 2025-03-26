import { useState } from "react";

export default function Example({ items }) {
  const [selection, setSelection] = useState(null);
  const [prevItem, setPrevItem] = useState(items);
  if (items !== prevItem) {
    setPrevItem(items);
    setSelection(null);
  }
  return (
    <div className=" m-5  ">
      <ul className=" bg-gray-100 pl-10 py-3 shadow-2xl">
        {items.map((item) => (
          <li>
            <input
              type="checkbox"
              checked={item.id === selection?.id}
              onChange={() => setSelection(item)}
            />
            {item.title}
          </li>
        ))}
      </ul>
      {selection?.id && (
        <div className=" mt-2 bg-gray-100 shadow-xl px-3 py-2">
          <h2 className=" m-2"> Selection Item</h2>
          <div
            className="shadow-sm "
            style={{
              padding: "10px",
              backgroundColor: "lightcyan",
            }}
          >
            {selection?.title}
          </div>
        </div>
      )}
    </div>
  );
}
