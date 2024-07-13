import React, { useState } from "react";
import MyComponent from "./components/MyComponent";

function App(){
    const [show,setShow]=useState(true);
    let Change=()=>{
        setShow((prevShow)=>!prevShow)
    }

    return (
        <div className="app">
            <div>{show && <MyComponent></MyComponent>}</div>
            <div>
                <button type="button" onClick={Change}>
                    {show ? 'Hide post':'Show post'}
                </button>
            </div>
        </div>
    )
}
export default App;