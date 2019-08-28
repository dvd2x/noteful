import React from "react";
import Folders from "../folder/Folders";
import notes from "../notes/notes";

class MainRoute extends React.Component {
  static defaultProps = {
    folders: [],
    notes: []
  };
  state = {
    currentFolderIndex: 0,
    currentNoteIndex: 0
  };

  renderContent() {
    const currentFolderIndex = this.props.folders;
    const currentNoteIndex = this.props.notes[this.state.currentFolderIndex][
      this.state.currentNoteIndex
    ];
    return (
      <div>
        <div className="content">{currentFolderIndex}</div>
        <div className="folder">{currentNoteIndex}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Folders />
        <notes />
      </div>
    );
  }
}

export default MainRoute;
