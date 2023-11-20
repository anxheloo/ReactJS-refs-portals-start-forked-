import { useState, useRef, forwardRef, useEffect } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // if (timeRemaining <= 0) {
  //   clearInterval(timer.current);
  //   setTimeRemaining(targetTime * 1000);
  //   dialog.current.open();
  //   console.log("Inside if condition", timeRemaining);
  // }

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    console.log("Inside handleStart", timeRemaining);
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      console.log("Inside setInterval", timeRemaining);
    }, 10);
  }

  function handleStop() {
    console.log("Inside handleStop", timeRemaining);
    clearInterval(timer.current);
    dialog.current.open();
    // setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result={"lost"}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
      ></ResultModal>

      <div className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
};

export default TimerChallenge;
