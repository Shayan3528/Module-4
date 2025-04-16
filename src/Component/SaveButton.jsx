import useOnlineStatus from "../Hooks/useOnlineStatus";
export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleChange() {
    console.log("Your button is active");
  }

  return (
    <>
      <button
        onClick={handleChange}
        disabled={!isOnline}
        className={`border ${
          isOnline ? " border-gray-900" : " border-gray-300"
        }  rounded px-2 m-2`}
      >
        {" "}
        {isOnline ? "Save Progress" : "Reconnecting...."}
      </button>
    </>
  );
}
