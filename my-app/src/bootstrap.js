// Bootstrap can be used in two ways we can use cdn links of bootstrap and we can install bootstrap in npm

// using cdn link ||cdn link is present in index.html
import React from 'react'
// export default function Myfun()
// {
//     return (
//         <>
//             <button className = "btn btn-danger">Click Me</button>
//         </>
//         )
// }



// using installing bootstrap in npm  and it will download in this path     
import "../node_modules/bootstrap/dist/css/bootstrap.css"

export default function Myfun()
{
    return (
        <>
            <button className = "btn btn-danger">Click Me</button>
        </>
        )
}



