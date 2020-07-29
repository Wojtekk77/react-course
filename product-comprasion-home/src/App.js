import React from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./components/data/fotopulapki.json";
import Fotopulapka from "./components/Fotopulapka";
import Porownywarka from "./components/Porownywarka";

class App extends React.Component {
  state = {
    items: data,
    comapare_items: [],
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
  handleCompareClick = (item) => {
    console.log(item);
    const items = this.state.items.map((x) => {
      if (item.id === x.id) {
        x.isCompared = !x.isCompared;
      }
      return x;
    });
    var newArray = [...this.state.comapare_items];
    if (!this.state.comapare_items.includes(item)) {
      newArray.push(item);
    } else {
      newArray = newArray.filter((x) => x.isCompared); //usuniecie dziala
    }
    this.setState({
      items: items,
      comapare_items: newArray,
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
          isCompared={item.isCompared}
          click={() => this.handleCompareClick(item)}
        />
      ));
    const porownanie = this.state.comapare_items.map((item) => (
      <Porownywarka
        key={item.id}
        id={item.id}
        link={item.link}
        foto_src1={item.zdjecie1}
        foto_src2={item.zdjecie2}
        price={item.cena}
        name={item.Nazwa}
        price_before={item.cena_przed_promocja}
        click={() => this.handleCompareClick(item)}
        rozdzielczosc_matrycy={item.rozdzielczosc_matrycy}
        rozdzielczosc_video={item.rozdzielczosc_video}
        max_rozdzielczosc_zdjec={item.max_rozdzielczosc_zdjec}
        obiektyw={item.obiektyw}
        kat_widzenia_obiektywu={item.kat_widzenia_obiektywu}
        niewidoczny_oswietlacz_ir={item.niewidoczny_oswietlacz_ir}
        zacieg_oswietlacza_ir={item.zacieg_oswietlacza_ir}
        ekran={item.ekran}
        format_nagran_video={item.format_nagran_video}
        zasilanie={item.zasilanie}
        rejestracja_dzwieku={item.rejestracja_dzwieku}
        znakowanie_zdjec={item.znakowanie_zdjec}
        czujnik_pir={item.czujnik_pir}
        zasieg_czujnika_pir={item.zasieg_czujnika_pir}
        kat_widzenia_czujnika={item.kat_widzenia_czujnika}
        czas_aktywacji_po_wykryciu_ruchu={item.czas_aktywacji_po_wykryciu_ruch}
        zapis_danych={item.zapis_danych}
        interfejs={item.interfejs}
        wbudowany_moduł_gsm={item.wbudowany_moduł_gsm}
        mozliwosc_wysylania_zdjec={item.mozliwosc_wysylania_zdjec}
        dopuszczalna_wilgotnosc={item.dopuszczalna_wilgotnosc}
        polskie_menu={item.polskie_menu}
        klasyfikacja_ochronna={item.klasyfikacja_ochronna}
        temperatura_pracy={item.temperatura_pracy}
        wymiary={item.wymiary}
        waga={item.waga}
        isCompared={item.isCompared}
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
        <div className="container pb-5">
          <div id="product_wrapper" className="row">
            {porownanie}
          </div>
        </div>
      </>
    );
  }
}

export default App;
