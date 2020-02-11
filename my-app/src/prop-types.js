// prop-type is basically used for checking the type of prop. 
// FIRST WE HAVE TO DOWNLOAD PROP-TYPE PAKAGE BY THIS CAMMAND :-
// npm install prop-types

import React from "react"
import pt from "prop-types"

class App_prop extends React.Component
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
App_prop.propTypes = {
    name: pt.string.isRequired,
    rollno : pt.number
}
App_prop.defaultProps = {
    name: "UNKNOWN"
}
export default App_prop