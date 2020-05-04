// import React, { Component } from 'react'

// export default class Refs extends Component {
//     constructor(props)
//     {
//         super(props);
//         // Creating Refs [Used to FOCUS on specific Feild]
//         this.textInput = React.createRef(); 
//     }
//     componentDidMount = () => {
//         console.log(this.textInput.current)             //It prints the current ref (As we created ref inside paaswrd)
//         this.textInput.current.focus()          //Now Just After Mount this component our password feild will be on focus
//     }
//     render() {
//         return (
//             <form>
//                 Username : 
//                 <input type = "text" ></input>
//                 Password : 
//                 <input type = "text"  ref = {this.textInput}></input>
//                 Address : 
//                 <input type = "text" ></input>
//             </form>
//         )
//     }
// }


// Making Something :
import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            Typed : ""
        }
        // Creating Refs [Used to FOCUS on specific Feild]
        this.textInput = React.createRef(); 
    }
    HandleSubmit = (e) => {
        e.preventDefault()
        this.setState({ Typed : this.textInput.current.value })
    }
    render() {
        return (
            <form>
                You Typed : <h3> {this.state.Typed}</h3>
                Enter Text : 
                <input type = "text"  ref = {this.textInput}></input>
                
                <button type = "sumit" onClick = {this.HandleSubmit}>Submit</button>
            </form>
        )
    }
}

