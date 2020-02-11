// UseEffect is combination of ComponentDidMount() , ComponentWillUnmount() , componentDidUpdate() in React class lifecycle
// It will call when any component is mount ....
// It will call when any component(any state or element) is Modify ....  
// It will call when any component is Unmount ....  

import React , { useState , useEffect } from "react"
// To observe the use of useEffect We are changing(modifying the state per click and Observing that useEffect function is calling perClick)
// export default function Myfun()
// {
//     const [name1, setname1] = useState(0)
//     const [name2, setname2] = useState(100)
//     const Increamentfun = () => {
//         setname1(name1+1)
//     }
// 
//     const Decreamentfun = () => {
//         setname2(name2-1)
//     }

// It will call every update of state
//     useEffect(()=>{                                                     //This function take function as an arg.
//         console.log("Use Effect caling")
//     })   
// 
//     return(
//         <>
//             <h1>Increament Count : {name1}</h1>
//             <button onClick={Increamentfun}>Increament</button>
//             <h1>Decreament Count : {name2}</h1>
//             <button onClick={Decreamentfun}>Decreament</button>
//         </>
//     )
// }


// The functionality of useEffect which call everytime make worst .. so we want that useEffect will call only when we change in increament state
export default function Myfun()
{
    const [name1, setname1] = useState(0)
    const [name2, setname2] = useState(100)
    const Increamentfun = () => {
        setname1(name1+1)
    }

    const Decreamentfun = () => {
        setname2(name2-1)
    }
// This effect is depend on name1 only when modification in name1 will done then this will call only  
    useEffect(()=>{                                                    
        console.log("Use Effect caling")
    },[name1])   
    

    return(
        <>
            <h1>Increament Count : {name1}</h1>
            <button onClick={Increamentfun}>Increament</button>
            <h1>Decreament Count : {name2}</h1>
            <button onClick={Decreamentfun}>Decreament</button>
        </>
    )
}