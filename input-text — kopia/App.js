class App extends React.Component {
  state = {
    value: "",
  };

  handleInputChange(input_text) {
    this.setState({
      value: input_text.target.value,
    });
  }
  handleClick = () => {
    this.setState({
      value: "",
    });
  };
  // handleChange(){
  //   console.log(this);
  //   this.setState((state) => ({
  //     my_output = this.state.my_output +
  //   }))
  // }
  render() {
    return (
      <>
        <input
          value={this.state.value}
          className="big"
          onChange={this.handleInputChange.bind(this)}
          type="text"
        />
        <button className="big" onClick={this.handleClick.bind(this)}>
          reset
        </button>
        <PanelResult value={this.state.value.toUpperCase()} />
      </>
    );
  }
}

const PanelResult = (props) => {
  return <h1>{props.value}</h1>;
};

ReactDOM.render(
  <App btnTitle="dodaj cyfre" />,
  document.getElementById("root")
);
