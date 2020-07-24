const Button = (props) => {
  return (
    <button disabled={props.disabled} onClick={() => props.click()}>
      {props.text}
    </button>
  );
};
const Counter = (props) => {
  return props.nof <= 0 ? <span>{0}</span> : <span>{props.nof}</span>;
};
class TicketShop extends React.Component {
  state = {
    shoppingCart: 0,
    availableProducts: 7,
  };

  handleAddToCart = (props) => {
    if (this.state.availableProducts > this.state.shoppingCart) {
      this.setState((prevState) => ({
        shoppingCart: ++prevState.shoppingCart,
      }));
    }
  };

  handleRemoveFromCart = (props) => {
    if (this.state.shoppingCart > 0) {
      this.setState((prevState) => ({
        shoppingCart: --prevState.shoppingCart,
      }));
    }
  };

  handleBuy = () => {
    this.setState((prevState) => ({
      availableProducts: prevState.availableProducts - prevState.shoppingCart,
      shoppingCart: 0,
    }));
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;

    return (
      <>
        <Button
          disabled={shoppingCart ? false : true}
          text="-"
          number={-1}
          click={this.handleRemoveFromCart}
        />
        <Counter nof={shoppingCart} />
        <Button
          disabled={shoppingCart == availableProducts}
          text="+"
          number={1}
          click={this.handleAddToCart}
        />
        {shoppingCart > 0 && <button onClick={this.handleBuy}>KUP</button>}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
