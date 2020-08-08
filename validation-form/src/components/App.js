import React from "react";
import logo from "../logo.svg";
import "./App.css";

const SquareField = (props) => {
  return (
    <div className={props.classCss}>
      {props.win ? <span>w</span> : <span>f</span>}
    </div>
  );
};

class App extends React.Component {
  state = {
    // 0 - red, 1 - black
    colors: [0, 1],
    result: [],
    withoutWin: 0,
    percentWins: 0,
    cash: 1000,
  };
  //set list of colors and decide if we bet
  //return color or null
  makeBet = (previousColors, minRow, maxRow) => {
    if (previousColors.length > maxRow) {
      let arrOfLastBets = previousColors.slice(
        Math.max(previousColors.length - maxRow, 0)
      );
      for (let i = maxRow - 1; i >= 0; i--) {
        if (arrOfLastBets[i]) {
        } else {
          return null;
        }
      }
      console.log(arrOfLastBets);
      return arrOfLastBets[arrOfLastBets.length - 1].color;
    }
    return null;
  };

  handleClick = () => {
    const arr = [...this.state.colors];
    var randomResults = [];
    let withoutWin = 0;
    let winInRow = 0;
    let maxWithoutWin = 0;
    let previousColor = 1;
    let countWin = 0;
    let numberOfTries = 1000;
    for (let i = 0; i < numberOfTries; i++) {
      let randomColor = arr[Math.floor(Math.random() * arr.length)];
      this.makeBet(randomResults, 2, 8);
      if (previousColor !== randomColor) {
        withoutWin++;
        winInRow = 0;
      } else {
        withoutWin = 0;
        winInRow++;
        countWin++;
      }

      randomResults = randomResults.concat({
        id: i,
        color: randomColor,
        win: previousColor === randomColor,
        winInRow: winInRow,
        loseInRow: withoutWin,
      });
      previousColor = randomColor;
      if (withoutWin > maxWithoutWin) {
        maxWithoutWin = withoutWin;
      }
    }
    this.setState({
      result: randomResults,
      withoutWin: maxWithoutWin,
      percentWins: countWin / numberOfTries,
    });
  };

  render() {
    const squareFields = this.state.result.map((item) => {
      const squerColor = item.color ? "square-black" : "square-red";
      return (
        <SquareField
          key={item.id}
          classCss={squerColor}
          win={item.win}
          winInRow={item.winInRow}
          loseInRow={item.loseInRow}
        />
      );
    });
    return (
      <>
        <button onClick={this.handleClick}>dawaj mi tutaj losowo</button>
        {this.state.percentWins}
        <span> </span>
        {this.state.withoutWin}
        <br />
        {squareFields}
      </>
    );
  }
}

export default App;
