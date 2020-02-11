// Mounting is the intial phase of component
// It is a process to create an element and insert it in a DOM tree
// there are 4 methods that lies in mounting phase
// 1.constuctor
// 2.static DerivedStateFromProps()
// 3.render()
// 4.componentDidMount()


//1). CONSTRUCTOR
// Constructor are used only for 2 purpose
    //-Initialize state
    //-Binding Event Handler

    
// initialize state using constructor
import React, { Component } from 'react'
import { tsConstructorType } from '@babel/types'

export default class mouting extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "saksham",
            roll: this.props.id
        }   
    }
    render() {
        return (
            <div>
                <h1> hello i am {this.state.roll} and i m written in constructor</h1>
            </div>
        )
    }
}


// 2).static DerivedStateFromProps()
// Not important .. leave for now if comes in future use then update this


// 3).RENDER
// it is used to return element from class component


// 4).COMPONENT DID MOUNT()
// Used to get data from server and set the data to state
// Execute when component is mounted
