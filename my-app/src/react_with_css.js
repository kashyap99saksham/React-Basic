import React, { useState } from "react";

// 4 WAYS TO USE CSS
// -INLINE StyleSheet
// -External StyleSheet
// -CSS Module
// -CSS IN JS


// 1. Inline css in react
// import React from 'react'

// export default function Myfun()
// {
//     const MyColorObj = {                //Basically this is just an object 
//         color: "red"    
//     }
//     return (
//         <h1 style = {MyColorObj}> saksham </h1>
//     ) 
// }
// Now if we want to use multiple objects as css inline
// import React from 'react'

// export default function Myfun()
// {
//     const MyColorObj = {                //Basically this is just an object 
//         color: "red"    
//     }
//     const MySizeObj = {                //Basically this is just an object 
//         fontSize: "100px"               //See the syntax for styling bro   
//     }
//     return (
//         <h1 style = { { ...MySizeObj, ...MyColorObj} }> saksham </h1>           //Here we are using spread operator for multi properties : syntax-> {...prop1 , ...prop2}
//     ) 
// }

// Now we are creating a button onclick change button's color
// export default function Myfun()
// {
//     const [button, setbutton] = useState(false)
//     const Color = {
//         color: "red",
//         backgroundColor: "green"
//     }
//     const ChangeState = () => {
//         setbutton(true)
//     }
//     if(button)
//     {
//         Color.color = "white"
//         Color.backgroundColor = "black"
//     }
//     return < button onClick = { ChangeState } style = {Color} >Click Me</button>
// }




// --------------------------------------
// 2. External CSS
// All Css file merge into 1 css file 
// so we cannot use same class name for different work
// import "./external.css"
// export default function Myfun()
// {
//     return <h1 className = "text text2"> Saksham </h1>            //We can use two class name together
//     // return <h1 className = "text"> Saksham </h1>            //Focus on syntax 'className' not 'class'
// }




// 3. CSS MODULE
// css module let you the same  cSS class name in different files without worrying about name clash
// Css Module create  a unique classname of format [filename]\_[classname]\_\_[hash code]
// Syntax -
// import mystyle from "./App_module.css"
// < h1 className = {mystyle.txt} > Hello </h1>



// 4. CSS IN JS 
// it is not a part of react but provided by third party libraries. like Glamorous etc...
