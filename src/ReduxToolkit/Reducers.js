import { createReducer } from "@reduxjs/toolkit"


const initialState = {
    cnt : 0
}

export const customReducer = createReducer(initialState, {
    increment: (state, action)=>{
        state.cnt += 1
    },
    decrement: (state, action)=>{
        state.cnt -= 1
    },
    incrementByValue: (state, action)=>{
        state.cnt += action.payload
    }
    
})