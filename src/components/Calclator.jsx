import React from "react";
import Boilingverdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from "./lib/converter";

class Calclator extends React.Component{
    state={
        temperature:'',scale:'c'
    }
    onTemperatureChange=(e,scale)=>{
        this.setState({
            temperature:e.target.value,
            scale,
        })
    }
    render(){
        const {temperature,scale}=this.state;
        let celsius=scale=='f'?convert(temperature,toCelsius):temperature;
        let fahrenheit=scale=='c'?convert(temperature,toFahrenheit):temperature;
        return (
            <div>
                <TemperatureInput onTemperatureChange={this.onTemperatureChange} temperature={celsius} scale={'c'}/>
                <TemperatureInput onTemperatureChange={this.onTemperatureChange}  temperature={fahrenheit} scale={'f'}/>
                <Boilingverdict celsius={celsius} fahrenheit={fahrenheit}/>
            </div>
        )
    }
}
export default Calclator