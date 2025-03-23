import { useRef, useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const [pauseTime, setPauseTime] = useState(null);

  function handleClick() {
    setStartTime(Date.now());

    if (pauseTime) {
      setNow(pauseTime);
    }

    setNow(Date.now());
    setPauseTime(null);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  function handlePause() {
    clearInterval(intervalRef.current);
    setPauseTime(Date.now());
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className = "">
      <h2>Time Passed: {secondsPassed.toFixed(3)} </h2>
      <button onClick={handleClick}>Start</button>
      <button onClick={handleStop}>Stop </button>
      <button onClick={handlePause}> {pauseTime ? "Resume" : "Pause"} </button>
    </div>
  );
};

export default StopWatch;
