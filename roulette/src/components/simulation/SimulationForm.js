import React from "react";

const SimulationForm = (props) => {
  return (
    <>
      <button onClick={() => props.click(props.item.numberOfSimulations)}>
        drugi button
      </button>
      <button onClick={props.chooseRed} className="chooseRed">
        red
      </button>
      <button onClick={props.chooseBlack} className="chooseBlack">
        black
      </button>
      <input
        type="number"
        value={props.item.numberOfSimulations}
        onChange={props.handleSimulation}
      />
      <input
        type="number"
        value={props.item.speed}
        onChange={props.SimulationSpeed}
      />
      <button onClick={props.stopSimualtion}>Stop Simulation</button>
      <div>tekst w SimulationForm {props.item.text}</div>
    </>
  );
};

export default SimulationForm;
