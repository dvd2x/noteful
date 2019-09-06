import React from "react";
import storeData from "../store/storeData";
import "./folders.css";

class folders extends React.Component {
  static defaultProps = { folders: [] };
  state = {
    currentFolderIndex: 0
  };

  handleButtonClick(index) {
    this.setState({ currentFolderIndex: index });
    console.log("THIS BUTTON WAS CLICKED:", index);
  }

  renderButtons() {
    return this.props.folders.map((folder, index) => (
      <ul className="Folders">
        <li key={folder.id}>
          <button
            className="Folder"
            onClick={() => this.handleButtonClick(index)}
          >
            {folder.name}
            {console.log(folder.name)}
          </button>
        </li>
        )}
      </ul>
    ));
  }

  renderFolders() {
    const currentFolder = this.props.folders[this.state.currentFolderIndex];
    return (
      <div className="Folder">
        {currentFolder}
        {console.log(currentFolder)}
      </div>
    );
  }

  render() {
    return (
      <ul className="Folders">
        {Object.keys(storeData).map(folders => (
          <li key={folders.id}>
            <button className="Folder" onClick={this.state.clicked}>
              {this.renderButtons}
              {!!this.props.folders.length && this.renderContent()}
              {console.log(!!this.props.folders.length)}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

// const folders = props => {
//   console.log(props);
// return (
//   <ul className="Folders">
//     {Object.keys(storeData).map(folders => (
//       <li key={folders.id}>
//         <button className="Folder" onClick={props.clicked}>
//           {folders.name}
//           {console.log(folders)}
//         </button>
//       </li>
//     ))}
//   </ul>
// );
// };

export default folders;
