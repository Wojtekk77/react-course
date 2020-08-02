class App extends React.Component {
  state = {
    status: true,
  };

  componentDidMount() {
    console.log("apka zamontowana");
  }

  componentDidUpdate() {
    console.log("apka aktualizowana");
  }

  render() {
    console.log("parent render");
    return (
      <>
        <button onClick={() => this.setState({ status: !this.state.status })}>
          przycisk
        </button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
      </>
    );
  }
}

class Child1 extends React.Component {
  componentDidMount() {
    console.log("child1 zamontowana");
  }

  componentDidUpdate() {
    console.log("child1 aktualizowana");
  }
  render() {
    console.log("child1 render");
    return <div>{String(this.props.status)}</div>;
  }
}
class Child2 extends React.Component {
  componentDidMount() {
    console.log("child2 zamontowana");
  }

  componentDidUpdate() {
    console.log("child2 aktualizowana");
  }

  componentWillUnmount() {
    console.log("Child2 odmontowany");
  }

  render() {
    console.log("child2 render");
    return <div>Komponent Child2 zamontowany</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
