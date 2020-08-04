import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

// pseudo database
const data = [
  {
    id: 1,
    title: "Title number 1",
    body: "Content message number 1 ...",
  },
  {
    id: 2,
    title: "Title number 2",
    body: "Content message number 2 ...",
  },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Title number ${index}...`,
    body: `Content message number ${index}...`,
  });
  console.log(data);
}, 5000);

class App extends React.Component {
  state = {
    //referencja : comments: data ->
    //kopia -> pobieramy od razu (nie jest dobrym miejscem do pobierania danych)
    comments: [...data],
  };

  getData = () => {
    if (this.state.comments.length !== data.length) {
      console.log("getData aktualizacja");
      this.setState({
        comments: [...data],
      });
    } else {
      console.log("dane takie same");
    }
  };

  componentDidMount = () => {
    this.idI = setInterval(this.getData, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.idI);
  };

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <h5>{comment.body}</h5>
      </div>
    ));

    return (
      <>
        <div>{comments.reverse()}</div>
      </>
    );
  }
}

export default App;
