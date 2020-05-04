import React, {useState, Component} from 'react'
// Form in react are two types ; Controlled and Uncontrolled(It is written inside index.html only OR WITHOUT USING STATES)

// CONTROLLED FORM MEANS WE CAN MANUPULATE VALUES WHICH IS SUBMITED BY USER
// export default function Myform()
// {
//     // We want text should be in upper case everytime.... but toUpperCase() is not working with function component
//     const [Mytext, setMytext] = useState("Coupon")
//     const ChangeText = (event) => {
//         // console.log(event)
//         setMytext( event.value )              //Imp thing is that when chnge function is calling then the current obj is also pased and we can get value of current text
//     }
// // In Class we Have to write event.target.value.toupperCase().substr(0,10) (unfortunately cannt used in Functional comp.)
//     return (
//         <>
//             <form>
//                 <h1>Controlled Form </h1>
//                 <input type="text" value = {Mytext} onChange = {ChangeText} ></input>    
//             </form>
//         </>
//     )
// }


// Creating textarea with same functionality
// export default function Myform()
// {
//     // We want text should be in upper case everytime.... but toUpperCase() is not working with function component
//     const [Mytext, setMytext] = useState("Coupon")
//     const ChangeText = (event) => {
//         setMytext( event.value )              //Imp thing is that when chnge function is calling then the current obj is also pased and we can get value of current text
//     }
//     return (
//         <>
//             <form>
//                 <h1>Controlled Form </h1>
//                 <textarea type="text" value = {Mytext} onChange = {ChangeText} ></textarea>
//             </form> 
//         </>
//     )
// }


// Control Multiple Input elements
export default class Myform extends Component{
    state = {
        name : "Saksham",
        password : "1234"
    }
    HandleChange = (event) => {
        // console.log(event.target)
        this.setState({
            [event.target.name] : event.target.value
        })
    };
    render()
    {
        return (
            <>
                <form>
                    <h1>
                        Enter Your name
                    </h1>
                    <input type = "text" name = "name" value = {this.state.name} onChange = {this.HandleChange}/>
                    <h1>
                        Enter Your Password
                    </h1>
                    <input type = "password" name = "password" value = {this.state.password} onChange = {this.HandleChange}/>
                </form>
            </>
        )
    }
}   


// Control Form 
// export default class Myform extends Component{
//     state = {
//         name : "Saksham",
//         password : "1234"
//     }
//     HandleChange = (event) => {
//         this.setState({
//             [event.target.name] : event.target.value
//         })
//     };
//     HandleSubmit = (event) => {
//         // Now We can control our whole Form by HandleSubmit HOw:
//         console.log(event.target)           //It gives full Form [it has whole control on our form]
//         console.log(event.target[0])           //It gives input (text)
//         console.log(event.target[1])           //It gives input (password)
//         console.log(event.target[2])           //It gives (submit button)

//         event.preventDefault();             //Form have Deault behaviour to redirect after submit
//     }
//     render()
//     {
//         return (
//             <>
//                 <form onSubmit = {this.HandleSubmit}>
//                     <h1>
//                         Enter Your name
//                     </h1>
//                     <input type = "text" name = "name" value = {this.state.name} onChange = {this.HandleChange}/>
//                     <h1>
//                         Enter Your Password
//                     </h1>
//                     <input type = "password" name = "password" value = {this.state.password} onChange = {this.HandleChange}/>
//                     <br/>
//                     <button type="submit">Submit</button>
//                 </form>
//             </>
//         )
//     }
// }   