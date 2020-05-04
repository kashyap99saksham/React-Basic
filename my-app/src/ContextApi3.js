// Here is that file in which we want to use state  [Consumer FIlE]
import React, { Component } from 'react'
import {MyContext} from "./ContextApi"
export default class ContextApi3 extends Component {
    render() {
        return (
            <div>
                <h1>hello</h1>
                <MyContext.Consumer>{data => <h1> {data} </h1> } </MyContext.Consumer>
            </div>
        );
    }
}
