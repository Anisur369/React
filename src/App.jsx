import React from "react"
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";


function App(){
    return (
        <Emoji>
            {({addEmoji})=>{return <Text addEmoji={addEmoji}/>}}
        </Emoji>
    )
}

export default App
