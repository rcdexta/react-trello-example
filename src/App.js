import React, { Component } from "react";
import "./App.css";
import { Board } from "react-trello";

const data = require("./data.json");

const handleDragStart = (cardId, laneId) => {
  console.log("drag started");
  console.log(`cardId: ${cardId}`);
  console.log(`laneId: ${laneId}`);
};

const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log("drag ended");
  console.log(`cardId: ${cardId}`);
  console.log(`sourceLaneId: ${sourceLaneId}`);
  console.log(`targetLaneId: ${targetLaneId}`);
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>React Trello Demo</h3>
        </div>
        <p className="App-intro">
          <Board data={data} draggable
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}/>
        </p>
      </div>
    );
  }
}

export default App;
