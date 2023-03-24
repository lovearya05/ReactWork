
export const inc = (amount)=>{
    return (dispatch)=>{
        dispatch(
            {
                type: 'increment',
                payload: amount
            }
        )
    }
}

export const dec = (amount)=>{
    return (dispatch)=>{
        dispatch(
            {
                type: 'decrement',
                payload: amount
            }
        )
    }
}


