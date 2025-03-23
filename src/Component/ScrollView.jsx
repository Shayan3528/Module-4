import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollView() {
  const scrollRef = useRef(null);
  function handleScrollToTop() {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      ref={scrollRef}
      className="bg-gray-900 text-white h-[1500px] flex flex-col items-center"
    >
      <div className="flex justify-center items-center mt-5">
        <span>Scroll View Top</span>
      </div>

      <div className="fixed bottom-5 right-5">
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </div>
  );
}
