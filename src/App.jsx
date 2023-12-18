import React from "react"
import Counter from "./components/HOC/Counter";
import ClickCounter from "./components/HOC/ClickCounter";
import Section from "./components/HOC/Section";
import themeContext from "./Contexts/themeContext";


class App extends React.Component{
    state={
        theme:'dark',
    }
    render(){
        const {theme}=this.state;
        return (
            <div>
                <Counter>
                    {(count,incrementCount)=>(<ClickCounter count={count} incrementCount={incrementCount}/>)}
                </Counter>
                <themeContext.Provider value={{theme}}>
                    <Section/>
                </themeContext.Provider>
            </div>
        )
    }
}

export default App
