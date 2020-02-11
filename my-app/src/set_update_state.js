// setState Method is used to change the value of state
import React, { Component } from 'react'
class Myclass extends Component{
    state = {
        name: this.props.name,
        roll: this.props.roll
    }
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
            <h1>I m prop value :- {this.state.name}</h1>
            <h1>I m sate value :- {this.state.roll}</h1>
            <button onClick = { this.ChageText }>click me to change the text</button>
        </>
        )
    }
}
export default Myclass