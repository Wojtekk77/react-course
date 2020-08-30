import React from "react";
import ThrowBall from "../ThrowBall";
import SimulationForm from "./SimulationForm";
import "./Simulation.css";
import SimulationData from "./SimulationData.js";
class Simulation extends React.Component {
  state = {
    numberOfSimulations: 1,
    color: "",
    winInRow: 0,
    loseInRow: 0,
    longestLoseInRow: 0,
    longestWinInRow: 0,
    wins: 0,
    speed: 100,
    text: "tekst w Simulation state",
    stopSimulation: false,
  };

  chooseRed = () => {
    const color = this.state.color === "red" ? "" : "red";
    this.setState({
      color,
    });
  };
  chooseBlack = () => {
    const color = this.state.color === "black" ? "" : "black";
    this.setState({
      color,
    });
  };
  handleColorChangeForSimulation = () => {
    return "red";
  };

  handleSim2 = (number, speed) => {
    this.setState({
      stopSimulation: false,
    });
    let wins = 0;
    let winInRow = 0;
    let loseInRow = 0;
    let i = 0;
    let field = null;
    let longestLoseInRow = 0;
    let longestWinInRow = 0;
    var Interval = setInterval(() => {
      field = this.props.throwBall();
      if (this.state.color === "") {
      } else if (field.color === this.state.color) {
        winInRow++;
        wins++;
        loseInRow = 0;
      } else {
        winInRow = 0;
        loseInRow++;
      }
      i++;
      if (longestLoseInRow < loseInRow) longestLoseInRow = loseInRow;
      if (longestWinInRow < winInRow) longestWinInRow = winInRow;
      this.setState({
        wins,
        winInRow,
        loseInRow,
        longestWinInRow,
        longestLoseInRow,
      });
      if (i >= number || this.state.stopSimulation) {
        clearInterval(Interval);
      }
    }, speed);
  };

  handleNumberSimulationChange = (e) => {
    this.setState({
      numberOfSimulations: e.target.value,
    });
  };

  handleSimulationSpeed = (e) => {
    this.setState({
      speed: e.target.value,
    });
  };
  handleStopSimulation = () => {
    this.setState({
      stopSimulation: !this.state.stopSimulation,
    });
  };
  render() {
    return (
      <div>
        <p>{this.props.board.text}</p>
        <SimulationForm
          handleSimulation={this.handleNumberSimulationChange}
          click={this.handleSim2}
          item={this.state}
          chooseRed={this.chooseRed}
          chooseBlack={this.chooseBlack}
          SimulationSpeed={this.handleSimulationSpeed}
          stopSimualtion={this.handleStopSimulation}
        />
        <SimulationData item={this.state} />
        <button onClick={() => this.handleSim2(this.state.numberOfSimulations)}>
          handleSim2
        </button>
      </div>
    );
  }
}

export default Simulation;
