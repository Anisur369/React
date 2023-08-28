import React from "react";
import withCounter from "./HOC/withCounter";

let ClickCounter=(props)=>{
    const {count,incrementCount}=props;
    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    )
}

export default withCounter(ClickCounter);
/* 
class ClickCounter extends React.Component{
    state={
        count:0
    }
    incrementCount=()=>{
        this.setState((prevState)=>({ count:prevState.count+1}))
    }
    render(){
        const {count}=this.state;
        return(
            <div>
                <button type="button" onClick={this.incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}
export default ClickCounter;
 */