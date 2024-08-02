import { createContext, useReducer } from "react";
import ComponentC from "./ComponentC";

export const newContext=createContext();
const initialState=0;
const reducer=(state,action)=>{
    switch (action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
}
function Counter(){
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={()=>dispatch('increment')}>Increment</button>
            <button type="button" onClick={()=>dispatch('decrement')}>Decrement</button>
            <div>Count - {count}</div>
            <newContext.Provider value={{count,dPath:dispatch}}>
                <ComponentC/>
            </newContext.Provider>
            
        </div>
    )
}
export default Counter;