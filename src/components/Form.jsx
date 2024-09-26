import React from "react";

class Form extends React.Component{
    state={
        title:"Enter value",
        text:"textarea value",
        library:"javascript",
        isAwesome:true,
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
        })
        /* if(e.target.type=="text"){
            this.setState({
                title:e.target.value,
            })
        }else if(e.target.type=="textarea"){
            this.setState({
                text:e.target.value,
            })
        }else if(e.target.type=="select-one"){
            this.setState({
                library:e.target.value
            })
        }else if(e.target.type=="checkbox"){
            this.setState({
                isAwesome:e.target.checked
            })
        }else{
            console.log("no value & text")
        } */
    }
    submitHandler=(e)=>{
        e.preventDefault();
        const {title,text,library,isAwesome}=this.state;
        console.log(title,text,library,isAwesome)

    }
    render(){
        const {title,text,library,isAwesome}=this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input name="title" type="text" placeholder="Enter title" value={title} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <textarea name="text" value={text} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <input type="text" value={null}/>
                    <br/>
                    <br/>
                    {/* <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="javascript">javascript</option>
                        <option value="Angular">Angular</option>
                        <option value="php">php</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange}/>
                    <br/>
                    <br/> */}
                    <input type="submit" value={"submit"}/>
                </form>
            </div>
        )
    }
}
export default Form