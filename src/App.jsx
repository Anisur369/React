import React from "react"
import Counter from "./components/HOC/Counter";
import ClickCounter from "./components/HOC/ClickCounter";
import Section from "./components/HOC/Section";


function App(){
    return (
        <div>
            <Counter>
                {(count,incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}
            </Counter>
            <Section/>
        </div>
    )
}

export default App
