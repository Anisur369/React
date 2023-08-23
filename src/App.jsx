import React from "react"
import Emoji from "./components/composition/Emoji";
import Bracket from "./components/composition/Bracket";
import Text from "./components/composition/Text";


function App(){
    return (
        <div>
        <Emoji>
            {({addEmoji})=>
            <Bracket>
                {({addBracket})=><Text addEmoji={addEmoji} addBracket={addBracket}/>}
            </Bracket>}
        </Emoji>
        <br/>
        <br/>

        <Emoji>
            {({addBracket})=><Text addBracket={addBracket}/>}
        </Emoji>


        </div>
    )
}

export default App
