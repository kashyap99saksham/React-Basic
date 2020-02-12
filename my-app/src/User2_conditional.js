import React from 'react'
import Guest from './Guest2_conditional'
export default function User(props)
{
    return(
        <>
            <h1>Welcome Saksham</h1>
            <button onClick={props.flag}>Logout</button>
        </>
    )
}