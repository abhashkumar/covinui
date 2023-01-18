
import React from "react"

function TestCOmponent1(props)
{
    //destructuring props
    const {id} = props
    console.log(props)
    return (
        <h1>test component {id}</h1>
    )
}

export default TestCOmponent1