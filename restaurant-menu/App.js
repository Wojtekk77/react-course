class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "tea", active: true },
      { id: 2, name: "potatoes", active: false },
      { id: 3, name: "butter", active: false },
      { id: 4, name: "soup", active: false },
      { id: 5, name: "hot water", active: false },
      { id: 6, name: "bread", active: true },
    ],
  };

  handleChangeStatus = (id) => {
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
      // this.setState((prevState) => ({}));
    });
    this.setState({
      items,
    });
  };

  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </>
    );
  }
}
