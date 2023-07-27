import React from "react"

class Clock extends React.Component{    
    constructor(props){
        super(props);
        this.state={date:new Date()}
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
    render(){
        return (
            <h1 className="heading">
                <span className="text">Hello {this.state.date.toLocaleTimeString()}</span>
            </h1>
        )
    }
}

export default Clock
