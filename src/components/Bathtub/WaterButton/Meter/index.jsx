import React from "react";

const Meter = ({ progress }) => {
  return (
    <div className="meter">
      <div
        className="meterInside"
        style={{
          height: `${progress / 4.063}px`,
        }}
      />
    </div>
  );
};

export default Meter;
