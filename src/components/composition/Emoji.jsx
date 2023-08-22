import React from "react";

export default class Emoji extends React.Component{
    addEmoji=(text,Emoji)=>{return `${Emoji}${text}
    ${Emoji}`}

    render(){
        return (
            this.props.children({addEmoji:this.addEmoji})
        )
    }
}

