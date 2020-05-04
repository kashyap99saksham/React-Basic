// This is State Provider File [Of which state are passing to another file]
import React, { Component } from 'react'
import ContextApi2 from "./ContextApi2"
export const MyContext = React.createContext();
export default class ContextApi extends Component {
    state = {
        name : "Saksham"
    };
    render() {
        return (
            <MyContext.Provider>
                <ContextApi2 />
            </MyContext.Provider>
        )
    }
}
