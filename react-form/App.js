class Form extends React.Component {
  state = {
    city: "London",
    text: "",
    isLoved: true,
    number: 0,
  };
  handleChange = (e) => {
    console.log(e.target.type);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <label>
            set city
            <input
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              type="text"
            />
          </label>
          <br />
          <label>
            write smt about
            <textarea
              name="text"
              value={this.state.text}
              onChange={this.handleChange}
            ></textarea>
          </label>
          <br />
          <label>
            Do you love this city?
            <input
              name="isLoved"
              type="checkbox"
              checked={this.state.isLoved}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            How many times have you been there
            <select
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="more">more</option>
            </select>
          </label>
        </div>
      </>
    );
  }
}
