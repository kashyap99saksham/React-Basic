// Conditional Rendering is similar to condition works in js
// if and if-else are not used in this
// We cannot use any condition inside jsx

// So how to do???
// lets make a example of login/register : if prop value is true then {print hello saksham and logout button} else {print hello guest login and signup button}
// We are using two file name as login_conditional.js and signup_conditional.js

// import React from 'react'
// import Guest from "./Guest_conditional"
// import User from './User_conditional'
// export default function Customer(props)
// {
//     const check_cust = props.Cust

//     if(check_cust)
//         return <User />
//     else
//         return <Guest />
// }




// Now We are Going to use "Inline if with logical && operator"
// We are creating A file which is for prime memeber ... if member is prime then then file run else print normal user
// We are using "Prime_conditional.js" file to do this
// import React from 'react'
// import Prime from "./Prime_conditional"
// export default function Customer(props)
// {
//     const check_cust = props.PrimeMember
//     return(<>
//         {check_cust && <Prime />}
//     </>
//     )

// }


// Now We are making user friendly login and logout page
// We are using 2 file Guest2_conditional.js User2_condtional.js

import React, {useState} from 'react'
import Guest from "./Guest2_conditional"
import User from "./User2_conditional"
export default function Customer(){
    const [flag, setflag] = useState(false)         //We cannot use simple variable like var flag or let flag it is not working i dont 9 y
    const SetFlagFalse = () => {
        setflag(false)
    }
    const SetFlageTrue = () => {
        setflag(true)
    }
    // if(!flag)
    // {
    //     return <Guest flag = {SetFlageTrue} />
    // }
    // else
    // {
    //     return <User flag = {SetFlagFalse} />
    // }
   
    // With use of ternary operator
    // return(
    // <>
    //     {flag ? <User flag = {SetFlagFalse} /> :  <Guest flag = {SetFlageTrue} /> }
    // </>
    // )


    //WE CANNOT USE IF ELSE INSIDE JSX OR INSIDE RETURN FUNCTION... BUT WE CAN USE ANY CONDITIONAL OPERATOR USING IFFIE FUNCTION IF WE WANT TO USE IN RETURN FUNCTION
    //With use of IFFE function : This funcion have no name and call itself
    return (<>
        {               //This braket is for : We are using js inside jsx
            (           //This bracket is part of iife function
                ()=>{           //IIfe  function with arrow function
                    if(!flag)
                    {
                        return <Guest flag = {SetFlageTrue} />
                    }
                    else
                    {
                        return <User flag = {SetFlagFalse} />
                    }
                }
            )()         //Calling itself  with '()'
        }
    </>)

}