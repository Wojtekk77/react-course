class App extends React.Component {
  state = {
    text: "",
    btn: "uruchom",
  };

  handleClick() {
    console.log(this);
    const number =
      Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    const letter = "a";
    this.setState((state) => ({
      text: this.state.text + number,
    }));
  }

  render() {
    return (
      <>
        <button className="big" onClick={this.handleClick.bind(this)}>
          {this.state.btn}
        </button>
        <PanelResult text={this.state.text} />
      </>
    );
  }
}

const PanelResult = (props) => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(
  <App btnTitle="dodaj cyfre" />,
  document.getElementById("root")
);
