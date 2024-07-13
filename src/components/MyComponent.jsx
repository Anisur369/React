import React from "react";
import { useState,useEffect } from "react";

function MyComponent(){
    const [count,setCount]=useState(0);
    const [date,setDate]=useState(new Date());

    const addClick=()=>{
        setCount((prevState)=>(prevState+1))
    };
    useEffect(()=>{
        document.title=`Clicked ${count} times`;
    },[count])
    const tick=()=>{
        console.log('hello')
        setDate(new Date())
    };
    useEffect(()=>{
        const interval=setInterval(tick,1000);
        return ()=>clearInterval(interval)
    },[])
    return (
        <div>
            <p>Time: {date.toLocaleTimeString()} </p>
            {count}
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    )
}
export default MyComponent;