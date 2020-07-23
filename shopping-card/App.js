const Button = (props) => {
  return <button onClick={() => props.click()}>{props.text}</button>;
};
const Counter = (props) => {
  return <span>{props.nof}</span>;
};
class TicketShop extends React.Component {
  state = {
    number_of_elements: 0,
  };

  handleClick = (props) => {
    this.setState((prevState) => ({
      number_of_elements: ++prevState.number_of_elements,
    }));
  };

  render() {
    return (
      <>
        <Button text="-" number={-1} click={this.handleClick} />
        <Counter nof={this.state.number_of_elements} />
        <Button text="+" number={1} click={this.handleClick} />
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
