import React, { Component } from 'react'

export default class Strict_Mode extends Component {
    componentWillMount(){
        console.log("Mouted")
    }
    render() {
        return (
            <h1>HEllo My Component is rendering Inside Strict Mode</h1>
        )
    }
}
