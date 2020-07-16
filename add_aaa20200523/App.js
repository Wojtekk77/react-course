class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "a",
      numebr: 0,
      test: "",
    };
    this.handleClick = this.handleClick.bind(this);
    //w konstrukotrze bindujemy aby nie robić tego w render
  }

  // handleClick() {
  //   console.log(this);
  //   const letter = "a";
  //   this.setState(() => {
  //     return {
  //       text: this.state.text + letter,
  //     };
  //   });
  // }

  //to lepsze, nie powoduje bledów w przyszlosci
  handleClick() {
    console.log(this);
    const letter = "a";
    this.setState((state) => ({
      text: this.state.text + letter,
    }));
  }

  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        {/* <button onClick={this.handleClick.bind(this)}>'dodaj a'</button> */}
        <button onClick={this.handleClick}>'dodaj a'</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
