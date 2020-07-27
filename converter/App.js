const Cash = (props) => {
  return (
    <div>
      {props.title}:
      {props.cash <= 0
        ? ""
        : ((props.cash / props.ratio) * props.price).toFixed(2)}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity",
    // ratioDollar: 3.6,
    // ratioEuro: 4.2,
  };

  static defaultProps = {
    currencies: [
      { id: 1, name: "dollar", ratio: 3.6, title: "dollars" },
      { id: 2, name: "euro", ratio: 4.1, title: "euros" },
      { id: 3, name: "pln", ratio: 1, title: "plns" },
    ],
    prices: {
      electricity: 0.51,
      gas: 4.76,
      oranges: 3.79,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      product: e.target.value,
    });
  };

  insertSuffix(selected) {
    if (selected === "electricity") return <em>kWh</em>;
    else if (selected === "gas") return <em>liters</em>;
    if (selected === "oranges") return <em>kilos</em>;
  }
  selectPrice(selected) {
    return this.props.prices[selected];
  }
  render() {
    const { amount, product } = this.state;
    const price = this.selectPrice(product);
    const currencies = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        id={currency.id}
        title={currency.title}
        ratio={currency.ratio}
        cash={amount}
        price={price}
      />
    ));
    return (
      <>
        <div className="app">
          <label>
            choose product
            <select value={product} onChange={this.handleSelect}>
              <option value="electricity">electricity</option>
              <option value="gas">gas</option>
              <option value="oranges">oranges</option>
            </select>
          </label>
          <br />
          <label>
            <input type="number" value={amount} onChange={this.handleChange} />
            {this.insertSuffix(this.state.product)}
          </label>
          {currencies}
          {/* <Cash cash={amount} ratio={ratioDollar} title="dollars" />
          <Cash cash={amount} ratio={ratioEuro} title="euros" /> */}
        </div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
