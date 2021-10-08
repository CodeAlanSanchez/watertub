import React from "react";
import Bathtub from "./components/Bathtub";
import "./styles.css";

const App = () => {
  return (
    <div className="main flex">
      <h2 className="heading">Fill the Bathtub!</h2>
      <Bathtub />
      <h5 className="footer">Created by Alan Sanchez</h5>
    </div>
  );
};

export default App;
