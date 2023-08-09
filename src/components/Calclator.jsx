import React from "react";
import Boilingverdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calclator extends React.Component{
    state={
        temperature:''
    }
    onTemperatureChange=(e)=>{
        this.setState({
            temperature:Number(e.target.value)
        })
    }
    render(){
        const {temperature}=this.state;
        return (
            <div>
                <TemperatureInput onTemp={this.onTemperatureChange} temperature={temperature} scale={'c'}/>
                <TemperatureInput onTemp={this.onTemperatureChange}  temperature={temperature} scale={'f'}/>
                <Boilingverdict celsius={temperature}/>
            </div>
        )
    }
}
export default Calclator