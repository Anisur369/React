import React from "react";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import User from "./components/User";

function App(){
    return (
        <div className="app">
            <ClickCounter/>
            <HoverCounter/>
            <User name={(isLoggedin)=>{return isLoggedin?"Sumit":"Geust" }}/>
        </div>
    )
}
export default App;