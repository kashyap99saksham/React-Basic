import React from 'react'
// When we are using image from public folder then

// export default function Myfun()
// {
//     return(<> 
//         <img src = {process.env.PUBLIC_URL + "/mypic.jpeg"}></img>
//         </>
//     )
// }

// When we are using image from src folder then
import pic from "./mypic2.jpeg"
export default function Myfun()
{
    return(<> 
        <img src = {pic} alt = "mypic" ></img>
        </>
    )
}