import React from "react";

export default function HoverCounter({count,incrementCount,theme,switchTheme}){
    let style;
    if(theme=='dark'){
        style={background:"black",color:"white"}
    }else if(theme=='light'){
        style={background:"red",color:"white"}
    }else{
        style=null
    }
    return (
        <div>
            <h1 onMouseOver={incrementCount} style={style}>Heading {count} line</h1>
            <button type="button" onClick={switchTheme}>Change Theme</button>
        </div>
    
    )
}