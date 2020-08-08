import React from "react";
import FieldOnBoard from "./FieldOnBoard";
import "./Board.css";
import ThrowBall from "./ThrowBall";
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
  };
  handleClickThrowBall = () => {
    const fieldList = this.state.fields;
    const pickedField = fieldList[Math.floor(Math.random() * fieldList.length)];
    console.log(pickedField.color + pickedField.id);
    const choosenField = this.state.fields.map((field) => {
      if (field.id === pickedField.id) {
        field.ballOnField = true;
      } else {
        field.ballOnField = false;
      }
    });
    this.setState({
      field: choosenField,
    });
  };
  render() {
    const fields = this.state.fields.map((field) => (
      <FieldOnBoard
        key={field.id}
        number={field.id}
        color={field.color}
        click={this.handleClickField}
        isBet={field.isBet}
        ballOnField={field.ballOnField}
      />
    ));

    return (
      <div className="board">
        {fields}
        <ThrowBall click={this.handleClickThrowBall} />
      </div>
    );
  }
}
export default Board;
