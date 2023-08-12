import React from "react";
function Boilingverdict({celsius=24,fahrenheit=10}){
    if(celsius>99.99 && fahrenheit>211.99){
        return <p>The water would boil.....y.</p>
    }
    return <p>Water would not boil.N</p>
}
export default Boilingverdict