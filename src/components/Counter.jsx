import { useReducer } from "react";

const inatialvalue={count:5};
const reduce=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {...state,count:state.count+action.value}  
        case 'decrement':
            return {...state,count:state.count-action.value}           
            break;
    
        default:
            return {...state,count:state.count};
    }
}

function Counter(){
    const [count,dispatch]=useReducer(reduce,inatialvalue);
    return (
        <div>
            <div>counter - {count.count}</div>
            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        </div>
    )
}
export default Counter;