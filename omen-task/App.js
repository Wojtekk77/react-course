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

  handleAddNewOmen = () => {
    if (this.state.newOmen != "") {
      const omens = [...this.state.omens];
      omens.push(this.state.newOmen);
      this.setState({
        omens: omens,
        newOmen: "",
      });
      alert("wróżba dodana, aktualnie mamy: " + omens);
    }
  };

  handleChange = (e) => {
    this.setState({
      newOmen: e.target.value,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>See your omen</button>
        <br />
        <input
          value={this.state.newOmen}
          onChange={this.handleChange}
          type="text"
        />
        <button type="submit" onClick={this.handleAddNewOmen}>
          add omen
        </button>

        {this.state.yourOmen ? <p>{this.state.yourOmen}</p> : null}
      </>
    );
  }
}

ReactDOM.render(<Omen />, document.getElementById("root"));
