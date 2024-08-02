import { useContext, useReducer } from "react";
import { newContext } from "./Counter";


function ComponentC(){
    const updateContext=useContext(newContext)
    return (
        <div>
            <div>Count - {updateContext.count}</div>
            <button type="button" onClick={()=>updateContext.dPath('increment')}>Increment</button>
            <button type="button" onClick={()=>updateContext.dPath('decrement')}>Decrement</button>
        </div>
    )
}
export default ComponentC;