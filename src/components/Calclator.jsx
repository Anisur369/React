import React from "react";
//import Boilingverdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

class Calclator extends React.Component{
    state={
        temperature:''
    }
    onTemperatureChange=(e)=>{
        this.setState({
            temperature:e.target.value
        })
    }
    render(){
        return (
            <div>
                <TemperatureInput scale={'c'}/>
                <TemperatureInput scale={'f'}/>
            </div>
        )
    }
}
export default Calclator