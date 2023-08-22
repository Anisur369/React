export default function Text({addEmoji}){
    let text='I am JavaScript Programming Language';
    return (
        <div>
            {addEmoji?addEmoji(text,'💖'):text}
        </div>
    )
}