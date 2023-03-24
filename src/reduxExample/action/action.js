export const inc = (amout)=>{
    return (dispatch)=>{
            dispatch({
                type: 'inc',
                payload : amout
            })
    }
}

export const dec = (amount)=>{
    return (dispatch)=>{
            dispatch({
                type: 'dec',
                payload : amount
            })
    }
}
