import React, {useState} from 'react'
// Form in react are two types ; Controlled and Uncontrolled

// CONTROLLED FORM MEANS WE CAN MANUPULATE VALUES WHICH IS SUBMITED BY USER
// export default function Myform()
// {
//     // We want text should be in upper case everytime.... but toUpperCase() is not working with function component
//     const [Mytext, setMytext] = useState("Coupon")
//     const ChangeText = (event) => {
//         setMytext( event.value )              //Imp thing is that when chnge function is calling then the current obj is also pased and we can get value of current text
//     }
//     return (
//         <>
//             <form>
//                 <h1>Controlled Form </h1>
//                 <input type="text" value = {Mytext} onChange = {ChangeText} ></input>
//             </form>
//         </>
//     )
// }


// Creating textarea with same functionality
export default function Myform()
{
    // We want text should be in upper case everytime.... but toUpperCase() is not working with function component
    const [Mytext, setMytext] = useState("Coupon")
    const ChangeText = (event) => {
        setMytext( event.value )              //Imp thing is that when chnge function is calling then the current obj is also pased and we can get value of current text
    }
    return (
        <>
            <form>
                <h1>Controlled Form </h1>
                <textarea type="text" value = {Mytext} onChange = {ChangeText} ></textarea>
            </form> 
        </>
    )
}