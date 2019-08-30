import React from "react";
import storeData from "../store/storeData";
import "./folders.css";

const folders = props => {
  console.log(props);
  return (
    <ul className="Folders">
      {Object.keys(storeData).map(folders => (
        <li key={folders.id}>
          <button className="Folder" onClick={props.clicked}>
            {folders.name}
            {console.log(folders)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default folders;
