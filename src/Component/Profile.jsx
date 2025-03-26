import { forwardRef, useState } from "react";
const Profile = forwardRef(({ userId }, ref) => {
  const [comment, setComment] = useState("");

  function handleChange(e) {
    setComment(e.target.value);
  }

  return (
    <>
      <span className=" font-bold  ml-5 mt-4 inline-block ">
        {" "}
        Profile ID : {userId}
      </span>
      <br />
      <input
        ref={ref}
        type="text"
        name="text"
        value={comment}
        onChange={handleChange}
        className="border border-gray-400  px-2 ml-4 mt-4 rounded "
      />
      <br />
      <span className=" inline-block ml-5 mt-4 "> {comment}</span>
    </>
  );
});
export default Profile;
