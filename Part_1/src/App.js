import './App.css';
import React from 'react';

import Nav from "./Nav";
import whiskey from "./Whiskey";
import duke from "./Duke";
import perry from "./Perry";
import tubby from "./Tubby";
import RouteList from "./RouteList";

let dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]


function App() {
  return (
    <div className="App">
      <Nav dogs={dogs}/>
      <div className="container">
        <RouteList dogs={dogs}/>
      </div>
    </div>
  );
}

export default App;
