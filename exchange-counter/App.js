const Cash = (props) => {
  return (
    <div>
      {props.title}
      {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };
  currencies = [
    { id: 1, name: "dollar", ratio: 3.6, title: "dollars" },
    { id: 2, name: "euro", ratio: 4.1, title: "euros" },
    { id: 3, name: "pln", ratio: 1, title: "plns" },
  ];
  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount } = this.state;
    const currencies = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        id={currency.id}
        title={currency.title}
        ratio={currency.ratio}
        cash={amount}
      />
    ));
    return (
      <>
        <div className="app">
          <input type="number" value={amount} onChange={this.handleChange} />
          {currencies}
          {/* <Cash cash={amount} ratio={ratioDollar} title="dollars" />
          <Cash cash={amount} ratio={ratioEuro} title="euros" /> */}
        </div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
