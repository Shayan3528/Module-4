import { useRef, useState } from "react";
import Profile from "./Profile";

export default function ProfileSwitch() {
  const inputRef = useRef(null);
  const [userId, setUserId] = useState(1);

  function handleChange() {
    inputRef.current.focus();
    setUserId(userId === 1 ? 2 : 1);
  }
  return (
    <div className=" border  border-gray-600  m-20 rounded shadow-xl  w-[400px] h-[300px] relative ">
      <button
        onClick={handleChange}
        className=" border border-gray-400 px-2 rounded mt-5 ml-4 bg-gray-200 "
      >
        Profile to switch No. {userId === 1 ? 2 : 1}
      </button>
      <br />

      <Profile key={userId} ref={inputRef} userId={userId} />
    </div>
  );
}
