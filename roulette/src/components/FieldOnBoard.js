import React from "react";
import "./FieldOnBoard.css";
import Ball from "./Ball";
import "./Ball.css";
import MyBet from "./MyBet";
import "./MyBet.css";
import Bid from "./Bid";

const FieldOnBoard = (props) => {
  const myBetOnField = props.isBet ? "posRelative" : null;
  const ballOnField = props.ballOnField ? "ballOnField posRelative" : null;
  return (
    <>
      <div
        onClick={props.click}
        className={`${props.color} field ${ballOnField} ${myBetOnField}`}
      >
        {props.number}
        {ballOnField ? <Ball /> : null}
        {myBetOnField ? <MyBet bid={props.bid} /> : null}
      </div>
    </>
  );
};

export default FieldOnBoard;
