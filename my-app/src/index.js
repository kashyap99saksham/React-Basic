import React from "react";
import ReactDOM from "react-dom";
// import el from "./App"
//  import App from "./App"
// import Student from "./App"
import Myform from "./form"

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
// ReactDOM.render(<App />,document.getElementById("root"));

// Using App.js file function : Importing function element
// ReactDOM.render(<Student />,document.getElementById("root"));

// USE PROPS
// ReactDOM.render(<Student name = "saksham" />,document.getElementById("root"));



// USE OF COMPOSING COMPONENT [MAIN FUNCTIONALITY OF REACT]
// import Mainfun from "./composing_comp2"
// ReactDOM.render(<Mainfun /> , document.getElementById("root"))


// USE OF PROP-TYPES
// import App_prop from "./prop-types"
// ReactDOM.render(
//     <App_prop name = "saksham" rollno = {1000} />,
//     document.getElementById("root")
//     );


//USE OF PROPS CHILDREN 
// import Myfun from "./props_children"
// ReactDOM.render(<Myfun> Props child </Myfun> , document.getElementById("root"));


// USE OF STATE
// import Myfun from "./state"
// ReactDOM.render(<Myfun roll = "100"/> ,document.getElementById("root"));

// USE OF EVENT HANDLER
// using class component
// import Myclass from "./event_handler"
// ReactDOM.render(<Myclass />,document.getElementById("root"));
// using function component
// import Myfunction from "./event_handler"
// ReactDOM.render(<Myfunction name="saksham" />,document.getElementById("root"));

// USE OF SET STATE 
// import Myclass from "./set_update_state"
// ReactDOM.render(<Myclass name = "saksham" roll="100"/>,document.getElementById("root"))

// PASSING ARGUMENT TO EVENT HANDLER
// import Myclass from "./passing_argument_event_handler"
// ReactDOM.render(<Myclass />,document.getElementById("root"));

// USING MOUNTING
// import Myclass from "./mouting"
// ReactDOM.render(<Myclass id="100" />,document.getElementById("root"));

// USE OF UNMOUNTING
// import Myclass from "./Unmounting"
// ReactDOM.render(<Myclass />,document.getElementById("root"));       //it print comp mounted success  
// ReactDOM.unmountComponentAtNode(document.getElementById("root"));      //it print comp  unmounted success


// ----------USE OF HOOK FUNCTION
// useState function
// import Myfun from "./useState_hooks"
// ReactDOM.render(<Myfun />,document.getElementById("root"))

// useEffect function
// import Myfun from "./useEffect_hooks"
// ReactDOM.render(<Myfun />,document.getElementById("root"))

// Custom Hook
// import Mainfun from "./custom_hook2"
// ReactDOM.render(<Mainfun />,document.getElementById("root"))

// Use of Conditional Rendering
// Use of if else:
// Checking customer is guest or old custumer
// import Customer from "./conditional_rendering"
// ReactDOM.render(<Customer Cust = {true} />,document.getElementById("root"))

// Use of Inline if with && operator
// Checking customer is Prime or Normal custumer
// import Customer from "./conditional_rendering"
// ReactDOM.render(<Customer PrimeMember = {true} />,document.getElementById("root"))

// Now We are making User friendly login and logout page (We will not set true false user will set)
// import Customer from "./conditional_rendering"
// ReactDOM.render(<Customer />,document.getElementById("root"))


// Uing map method from List.js file
// import Myfun from "./list"
// ReactDOM.render(<Myfun />,document.getElementById("root"))

// Use of key in react
// import Myfun from "./Key"
// ReactDOM.render(<Myfun /> , document.getElementById("root"))



// USE OF CSS
// Inline css
// import Myfun from "./react_with_css"
// ReactDOM.render(<Myfun />,document.getElementById("root"))


// Use of External css
// import Myfun from "./react_with_css"
// ReactDOM.render(<Myfun />,document.getElementById("root"))



// Images in react JS
// Image is inside public folder :: public folder is not a part of webpack
{/* <img src="%PUBLIC_URL%/mypic.jpeg">     //this code is for index.html */}
// Now when we are using image (located inside public)  from src js file 
// import Myfun from "./useing_image"
// ReactDOM.render(<Myfun />,document.getElementById("root"))


// Image is inside src function ::
// import Myfun from "./useing_image"
// ReactDOM.render(<Myfun />,document.getElementById("root"))


// USING BOOTSTRAP IN REACT
// import MyFun from "./bootstrap"
// ReactDOM.render(<MyFun />,document.getElementById("root"))


//USING FORM IN REACT JS 
ReactDOM.render(<Myform />,document.getElementById("root"))