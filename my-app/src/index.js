import React from "react";
import ReactDOM from "react-dom";
import el from "./App"
import App from "./App"

// USING JSX
// let myele = <h1> Hello </h1>   
// ReactDOM.render(myele ,document.getElementById("root"));
// ReactDOM.render(<h2>Direct without variable </h2> ,document.getElementById("root"));

// WITHOUT USING JSX
// let myele2 = React.createElement('h1',null,"hello");
// ReactDOM.render(myele2,document.getElementById("root"));

// USing App.js file element : Importing App.js element in this 
// ReactDOM.render(el ,document.getElementById("root"));

// USing App.js file component : Importing App.js component in this 
ReactDOM.render(<App />,document.getElementById("root"));

