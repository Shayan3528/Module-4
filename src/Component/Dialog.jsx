import { useEffect, useRef } from "react";

export default function Dialog() {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    dialog.showModal();
    return () => dialog.close();
  }, []);

  return (
    <div>
      <dialog
        ref={dialogRef}
        className="p-4 rounded shadow-lg bg-white text-black backdrop:bg-black/50"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p>This is an Open Dialog Window</p>
      </dialog>
    </div>
  );
}
