class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      result: this.props.result,
    };
  }
  // jezeli mamy blad "is not a function" wystarczy zbindować lub stworzyc funkcje strzalkowa
  // tak jak ponizej
  handleMathClick = (type, number = 1) => {
    // debugger;
    if (type === "subtraction") {
      this.setState((prevState) => ({
        count: ++prevState.count,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: this.props.result,
      }));
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  };

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number={10}
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number={1}
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton name="reset" type="reset" click={this.handleMathClick} />
        <MathButton
          name="+1"
          number={1}
          type="addition"
          click={this.handleMathClick}
        />
        <MathButton
          name="+10"
          number={10}
          type="addition"
          click={this.handleMathClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}

const MathButton = (props) => {
  console.log(props);
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = (props) => {
  return (
    <React.Fragment>
      <h1>
        Liczba kliknięć: {props.count}{" "}
        {props.count > 10 ? <span>to many counts</span> : null}
      </h1>
      <h1>Wynik: {props.result}</h1>
    </React.Fragment>
  );
};

const startValue = 99;
ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);
