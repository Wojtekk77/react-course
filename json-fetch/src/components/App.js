import React from "react";
import "./App.css";
import Word from "./Word";

class App extends React.Component {
  state = {
    words: [] /* żądanie AJAX */,
  };
  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} en={word.en} pl={word.pl} />
    ));
    return (
      <div className="App">
        <ul>{words}</ul>
      </div>
    );
  }
}

export default App;
