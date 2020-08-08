import React from "react";
import "./App.css";
import ButtonFetchUsres from "./ButtonFetchUsers";
import UserList from "./UsersList";
import ButtonAddUser from "./ButtonAddUser";

const API = "https://randomuser.me/api/?results=5";

class App extends React.Component {
  state = {
    users: [],
  };

  // componentDidMount() {
  //   this.handleDataFetch();
  // }
  // handleDataFetch = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       this.setState({
  //         users: result.results,
  //       });
  //     });
  // };

  handleDataFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error("no kurwa no ");
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          users: data.results,
        });
      })
      .catch((error) => console.log(error));
  };

  handleRadomClick = () => {
    // this.componentDidMount();
    this.handleDataFetch();
  };

  handleAddUser = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => {
        if (response.ok) {
          console.log(response);
          return response;
        }
        throw Error("erron in addUser");
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: this.state.users.concat(data.results),
        });
      })
      .catch((error) => console.log(error));
  };
  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsres click={this.handleRadomClick} />
        <ButtonAddUser click={this.handleAddUser} />
        {users.length > 0 ? <UserList users={users} /> : users}
      </div>
    );
  }
}

export default App;
