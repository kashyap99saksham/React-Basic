import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import Refs from "./Refs"

// ---------------- * ----------------- * --(USING APP.JS)------------------ * ------------------------------------
// import el from "./App"
//  import App from "./App"
// import Student from "./App"
// import Myform from "./form"

// WITHOUT USING JSX
// let myele2 = React.createElement('h1',null,"hello");
// ReactDOM.render(el,document.getElementById("root"));


// USING JSX
// let myele = <h1> Hello </h1>     //Creating Element in same file and rendering   
// ReactDOM.render( <h2> Direct without Element </h2> ,document.getElementById("root"));
// ReactDOM.render(el ,document.getElementById("root"));        //Using element from App.js


// USing App.js file component : Importing App.js component in this 
// ReactDOM.render(<App />,document.getElementById("root"));


// USing App.js file component and passing PROPS : Importing App.js component in this 
// ReactDOM.render(<App name = "Saksham" /> , document.getElementById("root"))


// Using App.js file function : Importing function element
// ReactDOM.render(<Student />,document.getElementById("root"));

// USE PROPS in functional component
// ReactDOM.render(<Student name = "saksham" />,document.getElementById("root"));



// ---------- * ------------------ * ------------------------ * --------------------------------- 

// USE OF COMPOSING_COMPONENT.js [MAIN FUNCTIONALITY OF REACT]
// import Mainfun from "./composing_comp2"
// ReactDOM.render(<Mainfun /> , document.getElementById("root"))


// --------- * ----------------- * ---------------------------- * ---------------------------------

// IMP - NOTE : PROPS ARE READ-ONLY CAN NOT UPDATE PROPS

// USE OF PROP-TYPES.js
// import App_prop from "./prop-types"
// ReactDOM.render (
//     <App_prop name = "saksham" rollno = {1000} />,
//     document.getElementById("root")
// );


// ------------ * --------------------- * --------------------- * ------------------------------------

//USE OF PROPS CHILDREN [WE CAN WRITE TWO OPENING AND CLOSING TAGS]
// import Myfun from "./props_children"
// ReactDOM.render(<Myfun> my name is aditi sinha </Myfun> , document.getElementById("root"));

// ----------------- * ---------------- * ------------------------ * ----------------------------------

// USE OF STATE
// import Myfun from "./state"
// ReactDOM.render(<Myfun roll = {101}  /> ,document.getElementById("root"));

// ------- * -------------- * --------------------- * ----------------------- * -----------------------

// USE OF EVENT HANDLER
// using class component
// import Myclass from "./event_handler"
// ReactDOM.render(<Myclass />,document.getElementById("root"));
// using function component
// import Myfunction from "./event_handler"
// ReactDOM.render(<Myfunction name="saksham" />,document.getElementById("root"));

// ---------- * --------------------- * -------------------------- * -----------------------------------

// USE OF SET STATE 
// import Myclass from "./set_update_state"
// ReactDOM.render(<Myclass name = "saksham" roll="100"/>,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

// PASSING ARGUMENT TO EVENT HANDLER
// import Myclass from "./passing_argument_event_handler"
// ReactDOM.render(<Myclass />,document.getElementById("root"));

// ---------- * --------------------- * -------------------------- * -----------------------------------

// READ PHASES_OF_COMPONENT

// ---------- * --------------------- * -------------------------- * -----------------------------------

// USING MOUNTING
// import Myclass from "./mouting"
// ReactDOM.render(<Myclass id="100" />,document.getElementById("root"));

// ---------- * --------------------- * -------------------------- * -----------------------------------

// check Updating.js

// ---------- * --------------------- * -------------------------- * -----------------------------------

// USE OF UNMOUNTING
// import Myclass from "./Unmounting"
// ReactDOM.render(<Myclass />,document.getElementById("root"));       //it print comp mounted success  
// ReactDOM.unmountComponentAtNode(document.getElementById("root"));      //it print comp  unmounted success

// ---------- * --------------------- * -------------------------- * -----------------------------------

// USE OF HOOK FUNCTION
// useState function
// import Myfun from "./useState_hooks"
// ReactDOM.render(<Myfun />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

// useEffect function
// import Myfun from "./useEffect_hooks"
// ReactDOM.render(<Myfun />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

// Custom Hook
// import Mainfun from "./custom_hook2"
// ReactDOM.render(<Mainfun />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

// Use of Conditional Rendering
// Use of if else:
// Checking customer is guest or old custumer
// import Customer from "./conditional_rendering"
// ReactDOM.render(<Customer Cust = {true} />,document.getElementById("root"))

// Use of Inline if with && operator
// Checking customer is Prime or Normal custumer
// import Customer from "./conditional_rendering"
// ReactDOM.render(<Customer PrimeMember = {false} />,document.getElementById("root"))

// Now We are making User friendly login and logout page (We will not set true false user will set)
// import Customer from "./conditional_rendering"
// ReactDOM.render(<Customer />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

// Using map method from List.js file
// import Myfun from "./list"
// ReactDOM.render(<Myfun />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

// Use of key in react
// import Myfun from "./Key"
// ReactDOM.render(<Myfun /> , document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

// USE OF CSS
// Inline css
// import Myfun from "./react_with_css"
// ReactDOM.render(<Myfun />,document.getElementById("root"))


// Use of External css
// import Myfun from "./react_with_css"
// ReactDOM.render(<Myfun />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

// Images in react JS
// Image is inside public folder :: public folder is not a part of webpack
/* <img src="%PUBLIC_URL%/mypic.jpeg">     //this code is for index.html in public and img is in public */
// Now when we are using image (located inside src)  in src js file 
// import Myfun from "./useing_image"
// ReactDOM.render(<Myfun />,document.getElementById("root"))


// Image is inside src function ::
// import Myfun from "./useing_image"
// ReactDOM.render(<Myfun />,document.getElementById("root"))

// Inside js file (inside src) and image is inside public folder || ( If we want to use any files inside PUBLIC folder then ..) there to explicitly specify your intention to make this file a part of the build.
// return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
// ---------- * --------------------- * -------------------------- * -----------------------------------

// USING BOOTSTRAP IN REACT
// import MyFun from "./bootstrap"
// ReactDOM.render(<MyFun />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------

//USING FORM IN REACT JS 
// ReactDOM.render(<Myform />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------
// Let know about Refs
// ReactDOM.render(<Refs />,document.getElementById("root"))

// ---------- * --------------------- * -------------------------- * -----------------------------------
// State Lifting Up :
// As we know state can be accessed only in local file | So if We want state into another file so
// We can Pass our state using props 
// ---------- * --------------------- * -------------------------- * -----------------------------------

// Context Api : When We want to use state of component in another component in herarical fasion
// then we have to pass as an props to our child and that child pass to their child [also if it doesnt need that props] but they hve to pass for their child
// So New concept comes CONTEXT : in which we can directly access any state of component into any file [without having to pass props down manually at every level]
// import ContextApi from "./ContextApi"
// ReactDOM.render(<ContextApi /> ,document.getElementById("root")) 


// ---------- * --------------------- * -------------------------- * -----------------------------------

// Strict Mode : [Where Else if We use Strict_MOde component and we use strict mode then it gives warning if any thing is outdated in our component]
import Strict_Mode from './Strict_Mode'
ReactDOM.render(<Strict_Mode/>,document.getElementById("root"))


