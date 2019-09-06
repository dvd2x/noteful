import React, { Component } from "react";
import { Link } from "react-router-dom";
import storeData from "../store/storeData";
import "./folders.css";

class Folders extends Component {
  state = {
    folders: []
  };

  componentDidMount() {
    setTimeout(() => this.setState(storeData), 600);
  }

  render() {
    return (
      <React.Fragment>
        <ul className="Folders">
          {this.state.folders.map(folder => (
            <li key={folder.id}>
              <Link to={`/notes/${this.state.id}`}>
                <button className="Folder">
                  {folder.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Folders;
