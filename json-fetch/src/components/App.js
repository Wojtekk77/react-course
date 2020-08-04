import React from "react";
import "./App.css";
import Word from "./Word";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state={}
  // } state oficjalnie jest w konstruktorze
  state = {
    words: [],
    isLoaded: false,
  };

  componentDidMount() {
    // setTimeout(this.fetchData, 3000);
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  }
  // fetchData = () => {
  //   fetch("data/words.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({
  //         words: data.words,
  //         isLoaded: true,
  //       });
  //     });
  // };
  render() {
    console.log("render");
    const words = this.state.words.map((word) => (
      <Word key={word.id} en={word.en} pl={word.pl} />
    ));
    return (
      <div className="App">
        <ul>{this.state.isLoaded ? words : "wczytuje dane"}</ul>
      </div>
    );
  }
}

export default App;
