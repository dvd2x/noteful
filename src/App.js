import React from "react";
import "./App.css";
import Header from "./header/Header";
import Folders from './folder/Folders'
//import store from './store/storeData'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Folders />
      </main>
    </div>
  );
}

export default App;
