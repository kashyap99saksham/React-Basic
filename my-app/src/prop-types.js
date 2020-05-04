// prop-type is basically used for checking the type of props. 
// FIRST WE HAVE TO DOWNLOAD PROP-TYPE PAKAGE BY THIS CAMMAND :-
// npm install prop-types

import React , {Component} from "react"
import pt from "prop-types"

class App_prop extends Component
{
    render()
    { 
        return (
            <div>
                <h1>Your Roll no is {this.props.rollno}</h1>
                <h1>Hello {this.props.name}</h1>

            </div>
        )
    }
}
// propTypes is the pakage name here
// .isRequired is used when we dont want to give empty value
// defaultProps is used when we forgot to give any props value  
// App_prop.propTypes = {                          //here propType  is property from prop-types pakage
//     name: pt.string.isRequired,
//     rollno : pt.number
// }
App_prop.defaultProps = {                   //here default  is property from prop-types pakage
    name: "UNKNOWN"
}
export default App_prop