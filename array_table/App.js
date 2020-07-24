const Item = (props) => <li>{`owoc ${props.content}`}</li>;
class ListItems extends React.Component {
  state = {
    items: ["apple", "plum", "pear"],
  };
  render() {
    const Items = this.state.items.map((item) => (
      <Item key={item} content={item} />
    ));
    return (
      <>
        <ul>
          {this.state.items.map((item) => (
            <Item key={item} content={item} />
          ))}
        </ul>
      </>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
