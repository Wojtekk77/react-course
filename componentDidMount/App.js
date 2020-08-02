class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number2: 0,
    };
    console.log("child Constructor");
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }
  render() {
    console.log("child render");
    return (
      <>
        <h2>Child</h2>
      </>
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("parent Constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
    this.setState({
      number: this.state.number + 1,
    });
  }
  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <h1>Parent</h1>
        <Child />
      </>
    );
  }
}
const startValue = 99;
ReactDOM.render(<Parent />, document.getElementById("root"));
