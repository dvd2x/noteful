import React, { Component } from "react";
import "./App.css";
import Header from "./header/Header";
import MainRoute from "./MainRoute/MainRoute";

class App extends Component {
  state = {
    folders: "placeholder Name"
  };

  showBtn = newName => {
    this.setState({ folders: newName });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <MainRoute
            folders={this.showBtn.bind(this, "folder")}
          />
        </main>
      </div>
    );
  }
}

export default App;
