import React from 'react'
import { useSelector } from 'react-redux'


const Component2 = () => {

    const amount = useSelector((state) => state.amount)
    
    return (
        <div>
        The value is:  {amount}
        </div>
    )
}

export default Component2
