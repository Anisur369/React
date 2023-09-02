import React from "react";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import User from "./components/User";
import Counter from "./components/HOC/Counter";

function App(){
    return (
        <div className="app">
            <Counter render={(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount}/>}/>
            <Counter render={(count,incrementCount)=><HoverCounter count={count} incrementCount={incrementCount}/>}/>
        </div>
    )
}
export default App;