// setState Method is used to change the value of state
import React, { Component } from 'react'
class Myclass extends Component{
    state = {
        name: this.props.name,
        roll: this.props.roll
    }

    // handleClick = () => {
    //     this.state.name = "Kashyap"             //Basically name is changing but react cannot recognize and render on page [behind the scene value is changed]
    // }
    // So Use setState() which changes and render on screen
    ChageText = () => {
        this.setState({
            name: "Aditi",
            roll: "200" 
        })
        console.log("Text Changed");
    }
    render()
    {
        return ( <>
            <h1>I m plain text</h1>
            <h1>I m prop value initialized in state  :- {this.state.name}</h1>
            <h1>I m prop value :- {this.state.roll}</h1>
            <button onClick = { this.ChageText }>click me to change the text</button>
        </>
        )
    }
}
export default Myclass