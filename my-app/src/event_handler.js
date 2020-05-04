import { Component } from "react";
import React from 'react'

// The actions to which js can respond are called events.
// React events are uses camelCase  i.e onClick
// event handling can be done with function and class both

// USING CLASS          || If We are using function inside class then we may not use function keyword
// class Myclass extends Component{
//     // Normal function inside class : can not access 'this' 
//     // handleClick()
//     // {
//     //     console.log("Button Clicked Bro");
//     // }
//     // Arrow function inside class : can access 'this' inside the function
//     myhandleClick = () =>
//     {
//         console.log("Button Clicked Bro",this);
//     }
//     render()
//     {
//         return( <>
//             <h1> I m plain text</h1>
//             <button onClick = { this.myhandleClick }> click me </button>
//         </>
//         )
//     }
// }
// export default Myclass


// USING FUNCTION: IT IS BEST WAY IN REACT IF WE ARE NOT REQUIRED TO USE STATE
// const callMyFunction = () => {
//     return console.log("Button Clicked bro");
// }
// const Myfunction = (props) => {                  //We Can also write callmyFunction inside Myfunction
//     return( <>
//             <h1>I am {props.name} </h1>
//             <button onClick = { callMyFunction }>click me</button>
//         </>
//     )
// }
// export default Myfunction

// USE OF PREVENT DEFAULT : if We dont want to redirect our page to any other link then use prevent default ||We cannot use "#" like in html 
// why it was came: coz anchor tag has default behaviour to use href to redirect somewhere 
const callMyFunction = (e) => {              //By default when event occur (e) event id is passed
    e.preventDefault()
    return console.log("Button Clicked bro");
}
const Myfunction = (props) => {
    return( <>
            <h1>I am {props.name} </h1>
            <a href = "https://www.google.com/" onClick = { callMyFunction }>click me </a>
        </>
    )
}
export default Myfunction















