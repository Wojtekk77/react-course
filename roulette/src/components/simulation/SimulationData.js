import React from "react";

const SimulationData = (props) => {
  return (
    <>
      <p>Number of simulations : {props.item.numberOfSimulations}</p>
      <p>Bid for {props.item.color}</p>
      <p>Win in row: {props.item.winInRow}</p>
      <p>Lose in row: {props.item.loseInRow}</p>
      <p>Total win : {props.item.wins}</p>
      <p>Longest win in row : {props.item.longestWinInRow}</p>
      <p>Longest lose in row : {props.item.longestLoseInRow}</p>
    </>
  );
};

export default SimulationData;
