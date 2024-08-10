import { useContext } from "react";
import { counterContext } from "./Counter";

function ComponentA() {
    const countContext=useContext(counterContext)
    console.log(countContext)
    return (
        <div>
            <h2>count- {countContext.count2}</h2>
            <button onClick={()=>countContext.dispatch2('increment')}>increment</button>
            <button onClick={()=>countContext.dispatch2('decrement')}>decrement</button>
        </div>
    )
}
export default ComponentA;