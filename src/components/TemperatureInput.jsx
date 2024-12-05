import React from "react";
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit',
}
class TemperatureInput extends React.Component{
    render(){
        const {scale,temperature,onTemp}=this.props;
        return (
            <div>
                <fieldset>
                    <legend>Enter temperture in {scaleNames[scale]}:</legend>
                    <input type="text" value={temperature} onChange={onTemp}/>
                </fieldset>
            </div>
        )
    }
}
export default TemperatureInput