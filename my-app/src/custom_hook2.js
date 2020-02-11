import React from 'react'
import Myfun from "./custom_hook"
export default function Mainfun()
{
    const data = Myfun()        //Using custom hook
    return(
        <>
            <h1>count : { data.count } </h1>
            <button onClick = { data.IncreamentCount }> Increament </button>
        </>
    )
}