import React from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import themeContext from "../../Contexts/themeContext";

export default class Content extends React.Component{
    render(){
        console.log(this.context)
        const {theme,switchTheme}=this.context;
        return(
            <div>
                <h1>This is a HoverCounter</h1>
                <Counter>
                    {(count,incrementCount)=>{
                        return ( 
                        <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>)
                    }}
                </Counter>
            </div>
        )
    }
}
Content.contextType=themeContext;