import React from "react";
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit',
}
class TemperatureInput extends React.Component{
    render(){
        //const {Boilingverdict}=this.props;
        const {scale}=this.props;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperture in {scaleNames[scale]}:</legend>
                    <input type="text" value={temperature} onChange={this.onTemperatureChange}/>
                </fieldset>
            </div>
        )
    }
}
export default TemperatureInput