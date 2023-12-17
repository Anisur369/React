import React from "react";

export default function HoverCounter({count,incrementCount,theme}){
    let style;
    if(theme=='dark'){
        style={background:"black",color:"white"}
    }else if(theme=='light'){
        style={background:"red",color:"white"}
    }else{
        style=null
    }
    return (
    <h1 onMouseOver={incrementCount} style={style}>Heading {count} line</h1>
    )
}