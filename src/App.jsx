import React, { useState,useCallback } from "react";
import Title from "./components/Title";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";

function App(){
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    
    const incrementByOne=useCallback(
        ()=>{setCount1(count1+1)}
    ,[count1])
    const incrementByFive=useCallback(
        ()=>{
            setCount2(count2+5);
        }
    ,[count2])
    return (
        <div className="app">
            <Title/>
            <ShowCount count={count1} title="Counter 1"/>
            <Button handleClick={incrementByOne}>Increment by one</Button>
            <hr/>
            <ShowCount count={count2} title="Counter 5"/>
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    )
}
export default App;