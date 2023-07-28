import React from "react"
import Button from "./Button";

class Clock extends React.Component{    
    constructor(props){
        super(props);
        this.state={date:new Date(),locale:'en-us'}
    }
    componentDidMount(){
        this.clockTimer=setInterval(() => {
            this.tick()
        }, 1000);
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }
    handleClick=(locale)=>{
        this.setState({
            locale,
        })
    }
    render(){
        const {date,locale}=this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">Hello {date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale="bn-bd"/>
            </div>
        )
    }
}

export default Clock
