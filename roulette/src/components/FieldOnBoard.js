import React from "react";
import "./FieldOnBoard.css";
const FieldOnBoard = (props) => {
  const ballOnField = props.ballOnField ? "ballOnField" : null;
  return (
    <div
      onClick={props.click}
      className={`${props.color} field ${ballOnField}`}
    >
      {props.number}
    </div>
  );
};

export default FieldOnBoard;
