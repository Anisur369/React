import React from "react";
import { createContext, useReducer } from "react";
import ComponentC from "./ComponentC";
import ComponentA from "./ComponentA";

export const counterContext=React.createContext();


const countValue=5;
const redue=(state,action)=>{
    switch (action) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;    
        default:
            return state;
    }
}

function Counter(){
    const [count,dispatch]=useReducer(redue,countValue)
    const [count2,dispatch2]=useReducer(redue,countValue)
    return (
        <div>
            <counterContext.Provider value={{count2,dispatch2}}>
                <ComponentA/>
            </counterContext.Provider> 
            
            <counterContext.Provider value={{count,dispatch}}>
                <ComponentC/>
            </counterContext.Provider>            
        </div>
    )
}
export default Counter;