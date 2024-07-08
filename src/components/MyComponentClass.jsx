import React from "react";

class MyComponentClass extends React.Component{
    state={
        count:0,
        date:new Date()
    }
    addClick=()=>{
        this.setState(({count})=>({
                count:count+1,
            })
        )
    }
    componentDidMount=()=>{
        const {count}=this.state;
        document.title=`Clicked ${count} times`
        setInterval(this.tick,1000)
    }
    componentDidUpdate=()=>{
        const {count}=this.state;
        document.title=`Clicked ${count} times`
    }
    tick=()=>{
        this.setState({
            date:new Date()
        })
    }

    render(){
        let {count,date}=this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()} </p>
                {count}
                <p>
                    <button type="button" onClick={this.addClick}>Click</button>
                </p>
            </div>
        )
    }
}
export default MyComponentClass;