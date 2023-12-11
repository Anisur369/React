import React from "react"
import Counter from "./components/Counter";
import ClickCounter from "./components/RenderProps/ClickCounter";


function App(){
    return (
        <div>
            <Counter render={(count,incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}/>
        </div>
    )
}

export default App
