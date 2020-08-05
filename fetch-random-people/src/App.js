import React, { useReducer } from "react";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          users: result.results,
        });
      });
  }

  handleRadomClick = () => {
    this.componentDidMount();
  };
  render() {
    const users = this.state.users.map((user) => (
      <div key={user.name.first}>
        <h4>{user.name.first}</h4>
      </div>
    ));
    return (
      <div>
        {users}
        <button onClick={this.handleRadomClick}>dawaj wyncy</button>
      </div>
    );
  }
}

export default App;
