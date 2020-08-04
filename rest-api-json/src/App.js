import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
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
    };
    xhr.send(null);
  }
  render() {
    return <div>qwe</div>;
  }
}

export default App;
