// Hooks are nothing but the function like 'useHook','useState','useEffect' etc
// It allows us to make whole app. with using only functions without using class [ means can use states and lifecycle mehtods in functions]
// Hooks Not work inside class
// Hooks cannot call inside loops , conditions , or nested functions.
// Always import useHook from react

// syntax : useState("saksham")     ||it is a hook fucntion, which Allows us to create state inside function component
// it returns a array : two items in array .. 1->state value || 2->state name
// so we can store the result and name of that state 

// const [name,setName] = useState("saksham")      //first way to declare (array Destucturing in js)
// const nameStateVar = useStat("saksham")  //second way . it returns array we can access the value -> nameStateVar[0] and name of that state nameStateVar[1]

// Accessing State in function component :
// We can access state directly {name}  without using this.name  

// CODE BEGINS HERE...
// using without array destructuring
// import React, {useState} from 'react'
// const Myfun = () => {
//     const mystatearray = useState("saksham")
//     const changeValue = () => {
//         mystatearray[1]("aditi")
//     }
//     return( <>
//             <h1>{mystatearray[0]}</h1>
//             <button onClick ={changeValue}> change </button>
//         </>
//     ) 
// }
// export default Myfun

// with use array destructuring
import React, {useState} from 'react'
const Myfun = () => {
    const [value,name] = useState("saksham")
    const changeValue = () => {
        name("aditi")           //Always remember the syntax of assigning new value
    }
    return( <>
            <h1>{value}</h1>
            <button onClick ={changeValue}> change </button>
        </>
    ) 
}
export default Myfun
    