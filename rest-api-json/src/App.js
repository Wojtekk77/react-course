import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //   };
  //   this.requestData();
  // } takie rzeczy w componentDidMount
  state = {
    users: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    //true -> asynchronic
    //open -> otwieramy nasze polaczenie
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    //onload wykona sie w momencie kiedy dostaniemy odpowiedz z serwera
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(typeof users); //obiekt
        console.log(users); //wypisanie ludzie
        this.setState({ users });
      }
      console.log(typeof xhr.response);
    };
    xhr.send(null);
  }
  //zamiast onload można
  //xhr.addEventListener('load',()=>{      if (xhr.status === 200) {
  // const users = JSON.parse(xhr.response);
  // console.log(typeof users); //obiekt
  // console.log(users); //wypisanie ludzie
  // this.setState({ users });})

  // requestData() {
  //   const xhr = new XMLHttpRequest();
  //   //true -> asynchronic
  //   //open -> otwieramy nasze polaczenie
  //   xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  //   //onload wykona sie w momencie kiedy dostaniemy odpowiedz z serwera
  //   xhr.onload = () => {
  //     console.log(xhr.status);
  //     if (xhr.status === 200) {
  //       const users = JSON.parse(xhr.response);
  //       console.log(typeof users); //obiekt
  //       console.log(users); //wypisanie ludzie
  //       this.setState({
  //         users,
  //       });
  //     }
  //     console.log(typeof xhr.response);
  //   };
  //   xhr.send(null);
  // }

  render() {
    const users = this.state.users.map((user) => (
      <div key={user.id} name={user.name}>
        <h4>{user.name}</h4>
        <p>{user.address.city}</p>
      </div>
    ));
    return <div>{users}</div>;
  }
}

export default App;
