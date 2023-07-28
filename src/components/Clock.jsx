import React from "react"

class Clock extends React.Component{    
    constructor(props){
        super(props);
        this.state={date:new Date(),locale:'bn-BD'}
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
    handleClick=()=>{
        this.setState({
            locale:"en-us"
        })
    }
    render(){
        const {date,locale}=this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">Hello {date.toLocaleTimeString(locale)}</span>
                </h1>
                <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }
}

export default Clock
