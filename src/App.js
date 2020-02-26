import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Herry"
  };

  changeNameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React Assignment 1</h1>
        <UserInput
          change={this.changeNameHandler}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} password="*****" />
      </div>
    );
  }
}

export default App;
