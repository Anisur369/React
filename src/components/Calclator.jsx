import React from "react";
import Boilingverdict from "./BoilingVerdict";
//class component
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
        //const {Boilingverdict}=this.props;
        const {temperature}=this.state;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperture in Celsius:</legend>
                    <input type="text" value={temperature} onChange={this.onTemperatureChange}/>
                </fieldset>
                <Boilingverdict celsius={temperature}/>
            </div>
        )
    }
}
export default Calclator