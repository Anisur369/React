import React from "react";
import Clock from "./Clock";
function ClassList({quantities=[]}){
    return (
        <div>
            {quantities.map(value=>(<Clock key={Math.random()}/>))}
        </div>
    )
}
export default ClassList