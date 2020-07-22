const FormMessage = (props) => <p>{props.text}</p>;

const OrderForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="checkbox"
        id="age"
        checked={props.isConfirmed}
        onChange={props.change}
      ></input>
      <label htmlFor="age">Do you have 16?</label>
      <br />
      <button type="submit">Buy ticket</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
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

  displayMessage = (isConfirmed, isFormSubmitted) => {
    if (isFormSubmitted) {
      return isConfirmed ? (
        <FormMessage text="ok lest go watch it" />
      ) : (
        <FormMessage text="Under 16? lets go play minecraft" />
      );
    } else {
      return null;
    }
  };

  render() {
    //destrukturyzacja
    let { isConfirmed } = this.state;
    return (
      <>
        <h1>Welcome home</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage(isConfirmed, this.state.isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
