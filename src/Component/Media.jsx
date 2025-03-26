import { useRef, useState } from "react";
import Video from "../assets/Video/Flowers.mp4";

export default function Media() {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef(null);
  
  function handleVideoPlayer() {
    const nextPlaying = !isPlay;
    setIsPlay(nextPlaying);

    if (nextPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
  return (
    <>
      <video
        ref={videoRef}
        src={Video}
        width="300"
        height="300"
        onPlay={() => setIsPlay(true)}
        onPause={() => setIsPlay(false)}
        className="ml-20 mb-20 rounded "
        controls
      >
        {" "}
      </video>
      <button
        onClick={handleVideoPlayer}
        className="border border-gray-400 px-2 py-0.5 ml-15 mb-10"
      >
        {isPlay ? "Pause" : "Play"}
      </button>
    </>
  );
}
