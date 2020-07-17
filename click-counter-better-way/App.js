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
    if (type === "substraction") {
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
          type="substraction"
          click={this.handleMathClick}
        />
        <MathButton />
        <MathButton />
        <MathButton />
        <MathButton />
        <h1>Liczba kliknięć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
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
const startValue = 99;
ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);
