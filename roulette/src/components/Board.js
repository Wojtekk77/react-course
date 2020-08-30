import React from "react";
import FieldOnBoard from "./FieldOnBoard";
import "./Board.css";
import ThrowBall from "./ThrowBall";
import Ball from "./Ball";
import Bid from "./Bid";
import Simulation from "./simulation/Simulation";
class Board extends React.Component {
  state = {
    fields: [
      { id: 0, color: "green", isBet: false, ballOnField: false },
      { id: 1, color: "red", isBet: false, ballOnField: false },
      { id: 2, color: "black", isBet: false, ballOnField: false },
      { id: 3, color: "red", isBet: false, ballOnField: false },
      { id: 4, color: "black", isBet: false, ballOnField: false },
      { id: 5, color: "red", isBet: false, ballOnField: false },
      { id: 6, color: "black", isBet: false, ballOnField: false },
      { id: 7, color: "red", isBet: false, ballOnField: false },
      { id: 8, color: "black", isBet: false, ballOnField: false },
      { id: 9, color: "red", isBet: false, ballOnField: false },
      { id: 10, color: "black", isBet: false, ballOnField: false },
      { id: 11, color: "black", isBet: false, ballOnField: false },
      { id: 12, color: "red", isBet: false, ballOnField: false },
      { id: 13, color: "black", isBet: false, ballOnField: false },
      { id: 14, color: "red", isBet: false, ballOnField: false },
      { id: 15, color: "black", isBet: false, ballOnField: false },
      { id: 16, color: "red", isBet: false, ballOnField: false },
      { id: 17, color: "black", isBet: false, ballOnField: false },
      { id: 18, color: "red", isBet: false, ballOnField: false },
      { id: 19, color: "red", isBet: false, ballOnField: false },
      { id: 20, color: "black", isBet: false, ballOnField: false },
      { id: 21, color: "red", isBet: false, ballOnField: false },
      { id: 22, color: "black", isBet: false, ballOnField: false },
      { id: 23, color: "red", isBet: false, ballOnField: false },
      { id: 24, color: "black", isBet: false, ballOnField: false },
      { id: 25, color: "red", isBet: false, ballOnField: false },
      { id: 26, color: "black", isBet: false, ballOnField: false },
      { id: 27, color: "red", isBet: false, ballOnField: false },
      { id: 28, color: "black", isBet: false, ballOnField: false },
      { id: 29, color: "black", isBet: false, ballOnField: false },
      { id: 30, color: "red", isBet: false, ballOnField: false },
      { id: 31, color: "black", isBet: false, ballOnField: false },
      { id: 32, color: "red", isBet: false, ballOnField: false },
      { id: 33, color: "black", isBet: false, ballOnField: false },
      { id: 34, color: "red", isBet: false, ballOnField: false },
      { id: 35, color: "black", isBet: false, ballOnField: false },
      { id: 36, color: "red", isBet: false, ballOnField: false },
    ],
    bid: 0,
    text: "tekst w board",
  };
  handleChangeBid = (e) => {
    console.log(e.target.value);
    if (e.target.value < 0) {
      return null;
    } else {
      this.setState({
        bid: e.target.value,
      });
    }
  };
  handleClickField = (id, color, isBet) => {
    console.log(id + color + isBet);
    const fields = this.state.fields.map((field) => {
      if (field.id === id) {
        console.log(field.id + " " + id);
        field.isBet = !field.isBet;
      }
      field.ballOnField = false;
      return field;
    });

    this.setState({
      fields,
    });
  };

  handleClickThrowBall = () => {
    const fieldList = this.state.fields;
    const pickedField = fieldList[Math.floor(Math.random() * fieldList.length)];
    // console.log(pickedField.color + pickedField.id);
    const fields = this.state.fields.map((field) => {
      if (field.id === pickedField.id) {
        field.ballOnField = true;
      } else {
        field.ballOnField = false;
      }
      return field;
    });
    this.setState({
      fields,
    });
    return { color: pickedField.color, number: pickedField.id };
  };

  //color changer
  handleColorChangeForSimulation = () => {
    console.log("color in handlecolorsaoijwdaoijdwaoij");
    return "red";
  };
  handleSimulation = (number) => {
    let i = 0;
    let field = null;
    var Interval = setInterval(() => {
      field = this.handleClickThrowBall();
      console.log(field.color === this.handleColorChangeForSimulation());
      i++;

      if (i >= number) {
        clearInterval(Interval);
      }
    }, 100);
  };

  render() {
    const fields = this.state.fields.map((field) => (
      <FieldOnBoard
        key={field.id}
        number={field.id}
        color={field.color}
        click={() => this.handleClickField(field.id, field.color, field.isBet)}
        isBet={field.isBet}
        ballOnField={field.ballOnField}
        bid={this.state.bid}
      />
    ));

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <Simulation
                board={this.state}
                throwBall={this.handleClickThrowBall}
                click={this.handleSimulation}
              />
            </div>
            <div className="col-md-4">
              <div className="board">{fields}</div>
            </div>
            <div className="col-md-4">
              <ThrowBall
                classCss="ThrowBall"
                click={this.handleClickThrowBall}
              />
              <div>
                <Bid onChange={this.handleChangeBid} bid={this.state.bid} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Board;
