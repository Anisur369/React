import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import themeContext from "../../Contexts/themeContext";

export default function Content(){
    return(
        <div>
            <h1>This is a HoverCounter</h1>
            <Counter>
                {(count,incrementCount)=>{
                    return <themeContext.Consumer>
                        {({theme})=><HoverCounter count={count} incrementCount={incrementCount} theme={theme}/>}
                    </themeContext.Consumer>
                }}
            </Counter>
        </div>
    )
}