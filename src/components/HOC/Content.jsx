import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import themeContext from "../../Contexts/themeContext";
import { useContext } from "react";

export default function Content(){
    const context=useContext(themeContext);
    const {theme,switchTheme}=context;
    return(
        <div>
            <h1>This is a HoverCounter</h1>
            <Counter>
                {(count,incrementCount)=>{
                    return (
                        <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>
                    )
                }}
            </Counter>
        </div>
    )
}