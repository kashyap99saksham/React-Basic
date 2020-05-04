import React, { Component } from 'react'
class Myclass extends Component{
    state = {
        name:"saksham",
        roll:56             //Suppose you are getting roll dynamically and u have to code delete something which have specific id
    }
    eventHandler = id => {          //Now we can delete specific id data [get functionality]
        console.log(id);                //arrow function returning || no need to write return in arrow func. if single line function 
    }
    handleClick = () => {
        return this.eventHandler(this.state.roll)
    };
    render()
    {
        return ( <>
            <h1>Hello {this.state.name}</h1>
            <button onClick = {this.handleClick}>click me</button>
            </>
        )
    }
}
export default Myclass

// WE cannot pass arg. directly to eventHandler function if we do then it will work like function call without onclick button
// and run without any event occur [without button click it call and gives output]
// so we have to make temporary function when event occur then only that temp.  func. call and that funct. call eventHandler func. 
