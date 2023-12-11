import React from "react"
import Counter from "./components/Counter";
import ClickCounter from "./components/RenderProps/ClickCounter";


function App(){
    return (
        <div>
            <Counter>
                {(count,incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}
            </Counter>
        </div>
    )
}

export default App
