import React from "react";
import logo from "../logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    username: "",
    email: "",
    pswd: "",
    accept: true,
    message: "",

    errors: {
      username: false,
      email: false,
      pswd: false,
      accept: false,
    },
  };

  messages = {
    username_incorrect: "Name has to be longer than 9 characters",
    email_incorrect: "There is no @ in email",
    pswd_incorrect: "Password has to be longer than 8 characters",
    accept_incorrect: "There is no acceptance",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.type);
    console.log(e.target.checked);
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const accept = e.target.checked;
    if (type === "checkbox") {
      this.setState({
        [name]: accept,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSumbit = (e) => {
    e.preventDefault();
    console.log("dziala");
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        pswd: "",
        accept: true,
        message: "your form has been submitted",

        errors: {
          username: false,
          email: false,
          pswd: false,
          accept: false,
        },
      });
    } else {
      this.setState({
        message: "your form hasn't been valid",
        errors: {
          username: !validation.username,
          email: !validation.email,
          pswd: !validation.pswd,
          accept: !validation.accept,
        },
      });
    }
  };

  formValidation = () => {
    //true ok
    //false !ok
    let username = false;
    let email = false;
    let pswd = false;
    let accept = false;
    let correct = false;
    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.pswd.length > 9) {
      pswd = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && pswd && accept) {
      correct = true;
    }
    return {
      username,
      email,
      pswd,
      accept,
      correct,
    };
  };
  componentDidUpdate() {
    console.log("znikl");
    if (this.state.message !== "") {
      setTimeout(() => {
        this.setState({ message: "" });
      }, 1000);
    }
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSumbit} noValidate>
          <label htmlFor="name">
            your name
            <input
              type="text"
              id="name"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            {this.state.errors.username && (
              <span>{this.messages.username_incorrect}</span>
            )}
          </label>
          <label htmlFor="email">
            your email
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            {this.state.errors.email && (
              <span>{this.messages.email_incorrect}</span>
            )}
          </label>
          <label htmlFor="password">
            your password
            <input
              type="password"
              id="password"
              name="pswd"
              onChange={this.handleChange}
              value={this.state.pswd}
            />
            {this.state.errors.pswd && (
              <span>{this.messages.pswd_incorrect}</span>
            )}
          </label>
          <label htmlFor="accept">
            agreement
            <input
              type="checkbox"
              id="accept"
              name="accept"
              onChange={this.handleChange}
              checked={this.state.accept}
            />
            {this.state.errors.accept && (
              <span>{this.messages.accept_incorrect}</span>
            )}
          </label>
          <button>submit</button>
        </form>
        {this.state.message && <h2>{this.state.message}</h2>}
      </>
    );
  }
}

export default App;
