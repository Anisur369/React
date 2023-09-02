import React from "react";

class ClickCounter extends React.Component{
    render(){
        const {count,incrementCount}=this.props;
        return(
            <div>
                <button type="button" onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}
export default ClickCounter;