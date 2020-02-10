import React, {Component} from "react"

// Exporting element to index.js
// let el = <h1>I m in App.js File and importing into index.js</h1>
// let el = React.createElement("h1",null,"I m in App.js File and importing into index.js");

// export default el;

// Exporting component to index.js
class App extends Component{   
    render() {
        return <h1>I m ele. inside the compont in app.js</h1>       //use jsx bro
        // return React.createElement("h1",null,"I m ele. inside the compont in app.js");  
    }
}
export default App;