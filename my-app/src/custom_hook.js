// A custom hook is js function whose name start with 'use' and that can call other hooks
// Custom_hook2.js is present to get the benefits of custom hook   
import React from 'react' 
import {useState} from "react"
export default function useCustomCounter()
{
    const [count, setcount] = useState(0)
    const IncreamentCount = () =>{   
        setcount(count+1)
    }
    return {
        count,
        IncreamentCount
    }
}