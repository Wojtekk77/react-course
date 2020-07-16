class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  handleMessageButton() {
    debugger;
    this.setState({
      messageIsActive: !this.state.messageIsActive,
    });
  }

  // jezeli odwołujemy się funkcyjnie możemy :
  // docelowo lepiej jeżeli odwołujemy się do state po prawej
  handleMessageButton2() {
    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive,
    }));
  }

  render() {
    const text = "oiwdajoiwa oawijdoia jaowi jdawoijd aowidjad";

    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? "Schowaj" : "Pokaż"}
        </button>
        <p>{this.state.messageIsActive && text}</p>
        {/* wyżej niepotrzebnie pokazuje nam sie znacznik p jak nie ma tekstu */}
        {this.state.messageIsActive ? <p>{text}</p> : null}
        {/* wyżej dostajemy puste gdy nie ma i znaczniki gdy pieknie */}
        {this.state.messageIsActive && <p>{text}</p>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
