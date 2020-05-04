import React, { Component } from 'react'

// Unmounting is the process of removing component from the DOM
// componentWillUnmount()
// Basically this method is invoked immediately before a component is unmounted and destroyed

export default class MyClass extends Component{
    componentDidMount(){
        console.log("Component Mounted successfully")
    }
    componentWillUnmount()          //Method execute just before unmounted
    {
        console.log("Component Unmounted Succesfully")
    }
    render()
    {
        return <h1>I m plain text</h1>
    }
}

// unmountComponentAtNode(document.getElementById("root"))      //function To unmount(remove from dom) 