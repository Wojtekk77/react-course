class Omen extends React.Component {
  state = {
    omens: ["first", "second", "third"],
    yourOmen: null,
    newOmen: "",
  };
  handleClick = () => {
    const omens = this.state.omens;
    const randomElement = omens[Math.floor(Math.random() * omens.length)];
    this.setState({
      yourOmen: randomElement,
    });
  };

  handleAddOmen = () => {
    this.setState({});
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>See your omen</button>
        <br />
        <input value={this.state.newOmen} type="text" />
        <button onClick={this.handleAddOmen}>add omen</button>
        {this.state.yourOmen ? <p>{this.state.yourOmen}</p> : null}
      </>
    );
  }
}

ReactDOM.render(<Omen />, document.getElementById("root"));
