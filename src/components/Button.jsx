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
        const {change,locale,show}=this.props;
        return (
            <div>
                <button type="button" onClick={()=>change(locale)}>{locale=="bn-bd"?"Bangla Clock":"English clock"}</button>
                {show && <p>Clock Change koro</p>}
            </div>
        )
    }
}
export default Button