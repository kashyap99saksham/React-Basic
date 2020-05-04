// Each child in a list should have a unique "key" prop.
// i dont know whats d use 
// [Coz one attribute should have 1 unique identity || So that it can be identify]

import React, {useState} from 'react'

export default function Myfun()
{
    const [name, setname] = useState(
        [
            {id:1, name:"saksham",password:"vivnwovdvwevew2v323"},             //array elements are objects
            {id:2, name:"aditi",password:"vicewcew223vnwovd23"},
            {id:3, name:"kashyap",password:"vivnwovvvev2f3d23"},
        ])

    return  name.map(user => {
        return (
            <>
            <h1 key = {user.id}> Id: {user.id} , Name : {user.name} , Password: {user.password} </h1>
            </>
        )
    })
}