import React from "react";
import classes from "./folders.css";
import storeData from "../store/storeData";

class Folders extends React.Component {
  static defaultProps = { folders: [] };
  state = {
    currentFoldersIndex: 0
  };

  componentDidMount(){
    console.log(this.props)
    this.props.storeData()
  }


  render() {
    const storeData
    return (
      <div className="folder">

        {this.props.folders}
        {console.log(this.props.folders)}
      </div>
    );
  }

  // handleButtonClick(index) {
  //   console.log("BUTTON WAS CLICKED!", { index });
  //   this.setState({ currentFoldersIndex: index });
  // }

  // renderButtons() {
  //   if (this.props.folders) {
  //     return this.props.folders.map((folder, index) => (
  //       <li key={index}>
  //       {console.log()}
  //       <button
  //       className={classes.folders}
  //       key={index}
  //       onClick={() => this.handleButtonClick(index)}
  //       >
  //       {folder.id}
  //           </button>
  //         </li>
  //       ));
  //   }
  // }

  // renderContent() {
  //   const currentFolder = this.props.folders[this.state.currentFoldersIndex];
  //   return <div className="content">{currentFolder.content}</div>;
  // }

  // render() {
  //   return (
  // <div className="folder">
  //   <ul>{this.renderButtons()}</ul>
  //   {!!this.props.folders && this.renderContent}
  // </div>
  //   );
  // }
}

export default Folders;
