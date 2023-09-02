import React from "react";

class HoverCounter extends React.Component{
    render(){
        let {count,incrementCount}=this.props;
        return(
            <div>
                <h1 type="button" onMouseOver={incrementCount}>Clicked {count} times</h1>
            </div>
        )
    }
}
export default HoverCounter;