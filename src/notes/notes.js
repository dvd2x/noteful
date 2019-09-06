import React, { Component } from "react";
import storeData from "../store/storeData";

class Notes extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(storeData), 600);
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.notes.map(note => (
            <li key={note.id}>
              <h1>{note.name}</h1>
              {note.content}
              {console.log(note.name)}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Notes;
