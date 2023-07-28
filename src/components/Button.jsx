import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextprops){
        let {change:nextChange,locale:nextLocale}=nextprops;
        let {change:currentChange,locale:currentLocale}=this.props;
        if(currentChange===nextChange && nextLocale===currentLocale){
            return false;
        }
        return true;
    }
    render(){
        console.log('button component')
        const {change,locale}=this.props;
        return (
            <button type="button" onClick={()=>change(locale)}>click me</button>
        )
    }
}
export default Button