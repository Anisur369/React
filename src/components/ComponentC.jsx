import { useContext } from "react";
import { counterContext } from "./Counter";

function ComponentC() {
    const countContext=useContext(counterContext)
    console.log(countContext)
    return (
        <div>
            <h2>count- {countContext.count}</h2>
            <button onClick={()=>countContext.dispatch('increment')}>increment</button>
            <button onClick={()=>countContext.dispatch('decrement')}>decrement</button>
        </div>
    )
}
export default ComponentC;