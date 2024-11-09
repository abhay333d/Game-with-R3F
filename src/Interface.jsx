import { useKeyboardControls } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import useGame from "./store/useGame";
import { addEffect } from "@react-three/fiber";

const Interface = () => {
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  const timeRef = useRef();
  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const { phase, startTime, endTime } = useGame.getState();

      let elapsedTime = 0;
      if (phase === "playing") {
        elapsedTime = (Date.now() - startTime) / 1000;
      } else if (phase === "ended") {
        elapsedTime = (endTime - startTime) / 1000;
      }

      if (timeRef.current) {
        timeRef.current.textContent = elapsedTime.toFixed(2);
      }
    });

    return () => {
      unsubscribeEffect();
    };
  }, []);

  return (
    <div className="interface">
      <div className="time" ref={timeRef}>
        0.00
      </div>

      {phase === "ended" && (
        <div className="restart" onClick={restart}>
          Restart
        </div>
      )}

      <div className="controls">
        <div className="raw">
          <div className={`key ${forward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
          <div className={`key ${leftward ? "active" : ""}`}></div>
          <div className={`key ${backward ? "active" : ""}`}></div>
          <div className={`key ${rightward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
          <div className={`key large ${jump ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
