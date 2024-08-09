import { useReducer } from "react";

const countValue=0;
const redue=(state,action)=>{
    switch (action) {
        case increment:
            return state+1
        case decrement:
            return state-1
            break;    
        default:
            return state;
    }
}

function Counter(){
    const [count,dispatch]=useReducer(redue,countValue)
    return (
        <div>
            <p>count- {count}</p>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
        </div>
    )
}
export default Counter;