// state are similar to props but 
// In props we can only read... In state we can modify also....
// Props can be used by function and class component..... But states can be used by class component only
// Two  ways to initialize state in react component :-
// 1. without constructor
// 2. with constructor


// 1. without constructor
// import React, { Component } from 'react'
// class Myfun extends Component{
//     state = {
//         name: "saksham"              //We can make anything inside stare : variable,arrray etc
//     }
//     render()
//     {
//         return <h1> I m {this.state.name} and written in state </h1>
//     }
// }
// export default Myfun


// 2. with constructor ||i think so.... Not so much usefull 
// import React, { Component } from 'react'
// class Myfun extends Component{
//     constructor(props)
//     {
//         super(props);                   //Most-First line inside constructor should be super(props) || parent class
//         this.state = {
//             name: "saksham",
//             roll: this.props.roll
//         }
//     }
//     render()
//     {
//         return( <>
//                 <h1> I m {this.state.name} and written in state  </h1>
//                 <h1> I m roll no {this.state.roll} and written in props Now i can easily modify the roll no ... which is coming in state</h1>
//             </>
//         )
//     }
// }
// export default Myfun



// Now main use of state is : we can not modify the props data.. so state is used to modify how???
import React, { Component } from 'react'
class Myfun extends Component{
    state = {
        name: "saksham",
        roll: this.props.roll
    }
    render()
    {
        return( <>
                <h1> I m {this.state.name} and written in state  </h1>
                <h1> I m roll no {this.state.roll} and written in props Now i can easily modify the roll no ... which is coming in state</h1>
            </>
        )
    }
}
export default Myfun


