import React from "react";
import "./ThrowBall.css";

const ThrowBall = (props) => {
  return (
    <button className="throwBallBtn" onClick={props.click}>
      Throw Ball
    </button>
  );
};

export default ThrowBall;
