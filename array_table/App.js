const data = {
  users: [
    { id: 1, age: 29, name: "Ann", sex: "female" },
    { id: 2, age: 49, name: "Martin", sex: "male" },
    { id: 3, age: 19, name: "Stan", sex: "male" },
    { id: 4, age: 11, name: "Karl", sex: "female" },
  ],
};
const Item = ({ user }) => (
  <div className="userInfo">
    <h1>Użytkownik {user.name}</h1>
    <p>informacje o użytkowniku</p>
    <p>wiek użytkownika: {user.age}</p>
    <p>płeć użytkownika: {user.sex}</p>
  </div>
);
class ListItems extends React.Component {
  state = {
    select: "all",
  };

  handleUsersSelect = (choice) => {
    this.setState({
      select: choice,
    });
  };
  userList = () => {
    const { select } = this.state;
    let users = this.props.data.users;
    if (this.state.select != "all") {
      users = users.filter((user) => user.sex == select);
    }
    users = users.map((user) => <Item key={user.id} user={user} />);
    return users;
  };

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.handleUsersSelect("all")}>Wszyscy</button>
          <button onClick={() => this.handleUsersSelect("female")}>
            Kobiety
          </button>
          <button onClick={() => this.handleUsersSelect("male")}>
            Mężczyźni
          </button>
          {this.userList()}
        </div>
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
