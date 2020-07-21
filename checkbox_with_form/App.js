const PositiveMessage = () => <p>ok lest go watch it</p>;
const NegativeMessage = () => <p>Under 16? lets go play minecraft</p>;
class TicketShop extends React.Component {
  state = {
    isComfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      isComfirmed: !prevState.isComfirmed,
      isFormSubmitted: false,
    }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      return this.state.isComfirmed ? <PositiveMessage /> : <NegativeMessage />;
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <h1>Welcome home</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            checked={this.state.isComfirmed}
            onChange={this.handleCheckboxChange}
          ></input>
          <label htmlFor="age">Do you have 16?</label>
          <br />
          <button type="submit">Buy ticket</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
