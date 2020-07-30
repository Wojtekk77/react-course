const Person = (props) => {
  return (
    <div>
      <li>{props.name}</li>
      <button onClick={props.click}>usuń</button>
    </div>
  );
};

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "john", surname: "doe" },
      { id: 2, name: "alice", surname: "michlinsky" },
      { id: 3, name: "jenny", surname: "dickens" },
      { id: 4, name: "forest", surname: "gump" },
    ],
  };
  handleClick = (person) => {
    const people = this.state.people.filter((x) => x.id !== person.id);
    this.setState({
      people,
    });
  };
  render() {
    const people = this.state.people.map((person) => (
      <Person
        key={person.id}
        name={person.name}
        surname={person.surname}
        click={() => this.handleClick(person)}
      />
    ));
    return <>{people ? <ul>{people}</ul> : <></>}</>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
