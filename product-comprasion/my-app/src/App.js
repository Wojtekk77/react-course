import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./components/data/fotopulapki.json";
import Fotopulapka from "./components/Fotopulapka";
import ListaFotopulapek from "./components/ListaFotopulapek";

class App extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <>
        <div className="container pb-5">
          <div id="product_wrapper" className="row">
            <ListaFotopulapek />
          </div>
        </div>
      </>
    );
  }
}

export default App;
