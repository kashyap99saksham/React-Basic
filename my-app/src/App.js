import React, {Component} from "react"

// Creating element In Two Ways || JSX / React 
// let el = <h1>I m in App.js File and importing into index.js</h1>
// let el = React.createElement("h1",null,"I m in App.js File and importing into index.js");
// export default el;      //Exporting element to index.js



// CREATING COMPONENT IN BOTH WAYS || USING CLASS / FUNCTION
// [FIRST LETTER OF COMPONENT NAME SHOULD BE CAPITAL]
// class App extends Component{   
//     render() {
//         return <h1>I m ele. inside the compont in app.js</h1>        //use jsx bro
//         // return React.createElement("h1",null,"I m ele. inside the compont in app.js");  
//     }
// }
// export default App;     //Exporting Compoent to index.js 


// Render Method can return single element only
// To return multiple elements then use REACT FRAGMENT OR <> </>
// class App extends Component{   
//         render() {
//             return <>
//                 <h1>I m ele. inside the compont in app.js</h1>
//                 <h2>i am another element returned by render funtion</h2>
//             </>;        
//         }
//     }
// export default App;
    
// Use of Props in class component || Props in class can be used using this.props.name 
// class App extends Component{   
//         render() {
//         return  <h1>I m ele. inside the compont in app.js and use props value : {this.props.name}</h1>;        
//         }
//     }
// export default App;


/*--------------- FUNTION COMPONENT-------------*/
// function student()
// {
//     return(
//         <>
//             <h1> I m text inside the function component</h1>
//             <h2>I m another element Inside function</h2>
//         </>
//         )
// }
// export default student;

// use new Way of function which is arrow function
// const Student = () => {
//     return <h1> I m text inside the arrow function component</h1>
// }
// export default Student; 

// Use of Props in function : It is used to print values dynamically
// const Student = (props) => {
//     return <h1> I m text inside the arrow function component and using props : {props.name}</h1>
// }
// export default Student; 




