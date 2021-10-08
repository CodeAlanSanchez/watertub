import React, { useEffect, useState } from "react";
import WaterButton from "./WaterButton";
import Meter from "./WaterButton/Meter";

const Bathtub = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [stepInterval, setStepInterval] = useState(100);

  return (
    <div className="bathtub flex">
      <div className="switch"></div>
      <div className="content">
        {waterLevel / 100 >= 1 ? <div className="water" /> : ""}
        {waterLevel / 100 >= 2 ? <div className="water" /> : ""}
        {waterLevel / 100 >= 3 ? <div className="water" /> : ""}
        {waterLevel / 100 >= 4 ? <div className="water" /> : ""}
        {waterLevel / 100 === 5 ? <div className="water" /> : ""}
      </div>
      <div className="buttons">
        <WaterButton
          stepInterval={stepInterval}
          waterLevel={waterLevel}
          setWaterLevel={setWaterLevel}
        >
          +
        </WaterButton>
        <WaterButton
          stepInterval={stepInterval}
          waterLevel={waterLevel}
          setWaterLevel={setWaterLevel}
          decrease
        >
          -
        </WaterButton>
      </div>
      <div>
        <Meter progress={waterLevel} />
      </div>
    </div>
  );
};

export default Bathtub;
