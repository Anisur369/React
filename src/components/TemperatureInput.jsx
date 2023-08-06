import React from "react";
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit',
}
class TemperatureInput extends React.Component{
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