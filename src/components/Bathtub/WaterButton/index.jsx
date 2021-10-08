import React, { useState } from "react";

const WaterButton = ({
  stepInterval,
  waterLevel,
  setWaterLevel,
  decrease,
  children,
}) => {
  const [timer, setTimer] = useState();

  const increaseWaterLevel = () => {
    let intervalId = setInterval(() => {
      setWaterLevel((prev) => (prev < 500 ? prev + 1 * stepInterval : prev));
    }, 20 * stepInterval);
    setTimer(intervalId);
  };

  const decreaseWaterLevel = () => {
    let intervalId = setInterval(() => {
      setWaterLevel((prev) => (prev > 0 ? prev - 1 * stepInterval : prev));
    }, 20 * stepInterval);
    setTimer(intervalId);
  };

  const clearTimer = () => {
    clearInterval(timer);
  };

  return (
    <div className={decrease ? "waterDown" : "waterUp"}>
      <button
        type="button"
        onMouseDown={() =>
          decrease ? decreaseWaterLevel() : increaseWaterLevel()
        }
        onClick={() => clearTimer()}
        onMouseLeave={() => clearTimer()}
      >
        {children}
      </button>
    </div>
  );
};

export default WaterButton;
