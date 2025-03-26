import { useState } from "react";
export default function Profile({ userId }) {
  const [comment, setComment] = useState("");

  function handleChange(e) {
    setComment(e.target.value);
  }

  return (
    <>
      <span className="font-bold  inline-block mt-5 ml-4">
        {" "}
        Profile ID:{userId}{" "}
      </span>
      <br />
      <input
        type="text"
        name="text"
        value={comment}
        onChange={handleChange}
        className="border border-gray-400  px-2 ml-4 mt-4 rounded "
      />
      <br />
      <span className=" bg-gray-200 ml-4 mt-4 underline inline-block px-3 py-1 rounded ">
        {comment}{" "}
      </span>
    </>
  );
}
