import React from "react";
import Fotopulapka from "./Fotopulapka";
import data from "./data/fotopulapki.json";

class ListaFotopulapek extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
  };

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <>
        <Fotopulapka
          object_id={data.ereaglee1s["id"]}
          link={data.ereaglee1s["link"]}
          price={data.ereaglee1s["cena"]}
          foto_src1={data.ereaglee1s["zdjecie1"]}
          foto_src2={data.ereaglee1s["zdjecie2"]}
          name={data.ereaglee1s["Nazwa"]}
        />
        <Fotopulapka
          object_id={data.ereaglee25["id"]}
          link={data.ereaglee25["link"]}
          price={data.ereaglee25["cena"]}
          foto_src1={data.ereaglee25["zdjecie1"]}
          foto_src2={data.ereaglee25["zdjecie2"]}
          name={data.ereaglee25["Nazwa"]}
        />
        <p>
          {items.map((item) => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </p>
      </>
    );
  }
}

export default ListaFotopulapek;
