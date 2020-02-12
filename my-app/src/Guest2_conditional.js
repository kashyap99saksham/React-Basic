import React from 'react'
import User from "./User2_conditional"
export default function Guest(props){

    return(
    <>
        <h1> Welcome Guest </h1>
        <button onClick={props.flag}>Login</button>
        <button>Signup</button>
    </>
    )
}