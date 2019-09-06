import React, { Component } from "react";
import Folders from "../folder/folders";
import storeData from "../store/storeData";
import Notes from "../notes/notes";

class MainRoute extends Component {
  state = {
    folders: [],
    notes: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(storeData), 600);
  }

  render() {
    return (
      <div>
        <Folders />
        <Notes />
      </div>
    );
  }
}

export default MainRoute;
