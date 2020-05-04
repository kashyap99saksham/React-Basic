// IN REACT GENERALLY WE ARE NOT USING FOR-LOOPS FOR ITERATES THE ARRAY . wE USE ITERATION USING MAP() METHOD
// import React from 'react'

// export default function Myfun()
// {
//     var arr = [10,20,30,40,50]
//     // We want to edit in every element of array with map method
//     var new_arr = arr.map(name => name*5)
//     console.log(new_arr)
//     return <h1>Array is inside console</h1>
// }


// // Some Crazy thing with array elements
import React, {useState} from 'react'

export default function Myfun()
{
    const [name, setname] = useState(
        [
            {id:10, name:"saksham",password:"vivnwovdvwevew2v323"},             //array elements are objects
            {id:20, name:"aditi",password:"vicewcew223vnwovd23"},
            {id:30, name:"kashyap",password:"vivnwovvvev2f3d23"}
        ])

    return  name.map(user => {
        return (
            <>
            <h1> Id: {user.id} , Name : {user.name} , Password: {user.password} </h1>
            </>
        )
    })
}


































