import "./App.css";
import React from "react";
import MapContainer from "./containers/MapContainer";
import NavBarContainer from "./containers/NavBarContainer";

function App(props) {
  return (
    <div className="App">
      <div>
        <NavBarContainer {...props}/>
        <MapContainer {...props}/>
      </div>
    </div>
  );
}

export default App;
