const PositiveMessage = () => <p>ok lest go watch it</p>;
const NegativeMessage = () => <p>Under 16? lets go play minecraft</p>;
class CheckboxText extends React.Component {
  state = {
    isComfirmed: true,
  };

  handleChange = () => {
    this.setState((prevState) => ({
      isComfirmed: !prevState.isComfirmed,
    }));
  };

  displayMessage = () => {
    return this.state.isComfirmed ? <PositiveMessage /> : <NegativeMessage />;
  };

  render() {
    return (
      <>
        <h1>Welcome home</h1>
        <input
          type="checkbox"
          id="age"
          checked={this.state.isComfirmed}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="age">Do you have 16?</label>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxText />, document.getElementById("root"));
