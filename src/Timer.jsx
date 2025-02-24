import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(false);
  useEffect(() => {
    if (isStop) {
      setTime(0);
    }
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    if (!isStart) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStart, isStop]);

  const play = () => {
    setIsStart(true);
    setIsStop(false);
  };

  const pause = () => {
    setIsStart(false);
  };

  const stop = () => {
    setIsStop(true);
    setIsStart(false);
  };

  return (
    <div>
      <h1>Temps en seconde : {time}</h1>
      <button onClick={play}>Commencer</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default Timer;
