// Custom Hook is Just Like Object [We created CustomHook And Here We created their Object , which have different values as an instance members]
// PARENT OF CUSTOM_HOOK.JS
import React from 'react'
import useCustomCounter from "./custom_hook"
export default function Mainfun()
{
    const data = useCustomCounter()        //Using custom hook
    const data2 = useCustomCounter()        //Using custom hook [It have different state variable]

    return  (
        <>
            <h1>count : { data.count } </h1>
            <button onClick = { data.IncreamentCount }> Increament </button>
            <h1>count : { data2.count } </h1>
            <button onClick = { data2.IncreamentCount }> Increament </button>
        </>
    )
}