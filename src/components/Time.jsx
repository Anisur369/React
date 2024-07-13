import React from "react";
import { useState,useEffect,useRef } from "react";

function Time(){
    const [count,setCount]=useState(0);
    const [date,setDate]=useState(new Date());
    const buttonRef=useRef();

    const addClick=()=>{
        setCount((prevState)=>(prevState+1))
    };
    useEffect(()=>{
        document.title=`Clicked ${count} times`;
    },[count]); 
       
    useEffect(()=>{
        buttonRef.current=setInterval(tick,1000);
        return ()=>clearInterval(buttonRef.current)
    },[]);

    const tick=()=>{
        console.log('hello')
        setDate(new Date())
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()} </p>
            {count}
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
            <button type="button" onClick={()=>clearInterval(buttonRef.current)}>Stop Time</button>
        </div>
    )
}
export default Time;