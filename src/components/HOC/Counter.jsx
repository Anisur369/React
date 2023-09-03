import React from "react";

class Counter extends React.Component{
    state={
        count:0
    }
    incrementCount=()=>{
        this.setState((prevState)=>({ count:prevState.count+1}))
    }
    render(){
        let {children}=this.props;
        let {count}=this.state;
        return children(count,this.incrementCount)
    }
}
export default Counter;