import { useImperativeHandle, useRef } from "react";

export default function RefProps({ ref }) {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return (
    <input
      ref={realInputRef}
      className="border border-gray-400 rounded m-5 focus:outline-green-500 "
    />
  );
}
