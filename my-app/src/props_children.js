// USE OF PROPS CHILDREN
import React, {Component} from "react"
import { compileFunction } from "vm";
// using arrow function
// const Myfun = props => {
//     return (
//     <h1>Hello I m {props.children}  </h1>
//     )
// }
// export default Myfun

// using class
class Myfun extends Component{
    render()
    {
        return <h1>Hello I m {this.props.children}  </h1>
    }
}
export default Myfun
