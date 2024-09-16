import React from "react";
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit',
}
function TemperatureInput({scale,temperature,onTemperatureChange}){
    return (
        <div>
            <fieldset>
                <legend>Enter temperture in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={(e)=>onTemperatureChange(e,scale)}/>
            </fieldset>
        </div>
    )
}
export default TemperatureInput