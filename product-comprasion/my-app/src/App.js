import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./components/data/fotopulapki.json";
import Fotopulapka from "./components/Fotopulapka";

class App extends React.Component {
  state = {
    items: data,
  };

  handleChange = (e) => {
    var prepareForSorted = this.state.items;

    prepareForSorted = this.state.items.sort((a, b) => {
      switch (e.target.value) {
        case "Nazwa":
          return a.Nazwa > b.Nazwa ? 1 : -1;
        case "Nazwa-malejaca":
          return a.Nazwa < b.Nazwa ? 1 : -1;
        case "cena":
          return a.cena > b.cena ? 1 : -1;
        case "cena-malejaca":
          return a.cena < b.cena ? 1 : -1;
      }
    });

    this.setState({
      items: prepareForSorted,
    });
  };
  render() {
    const fotopulapki = this.state.items
      .filter((item) => item.Nazwa != "Nazwa")
      .map((item) => (
        <Fotopulapka
          key={item.id}
          id={item.id}
          link={item.link}
          foto_src1={item.zdjecie1}
          foto_src2={item.zdjecie2}
          price={item.cena}
          name={item.Nazwa}
          price_before={item.cena_przed_promocja}
        />
      ));
    return (
      <>
        <select onChange={this.handleChange}>
          <option value="">sortowanie</option>
          <option value="cena">cena rosnąco</option>
          <option value="cena-malejaca">cena malejąco</option>
          <option value="Nazwa">nazwa rosnąco</option>
          <option value="Nazwa-malejaca">nazwa malejąco</option>
        </select>
        <div className="container pb-5">
          <div id="product_wrapper" className="row">
            {fotopulapki}
          </div>
        </div>
      </>
    );
  }
}

export default App;
