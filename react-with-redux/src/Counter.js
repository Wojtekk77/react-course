import React from "react";
import "./Counter.css";
class Counter extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    console.log("increment");
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  decrement = () => {
    console.log("decrement");
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="wrapper">
        <span>counter</span>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
