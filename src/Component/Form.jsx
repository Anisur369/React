import React from "react";

class Form extends React.Component{
    state={ 
        title:'javascript',
        text:'hello world',
        library:'javascript',
        isAwesome:true,
    }
    handleClick=(e)=>{
        if(e.target.type=='text'){
            this.setState({
                title:e.target.value
            });
        }else if(e.target.type=='textarea'){
            this.setState({
                text:e.target.value
            });
        }else if(e.target.type=='select-one'){
            this.setState({
                library:e.target.value
            });
        }else if(e.target.type=='checkbox'){
            this.setState({
                isAwesome:e.target.checked
            });
        }else{
            console.log('nothing here');
        }
    }
    submitHandler=(e)=>{
        const {title,text,library,}=this.state;
        e.preventDefault();
        console.log(title,text,library)
    }
    render(){
        const {title,text,library,isAwesome}=this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Enter title" value={title} onChange={this.handleClick} />
                    <br/><br/>
                    <textarea value={text} onChange={this.handleClick}></textarea>
                    <br/>
                    <select value={library} onChange={this.handleClick}>
                        <option value={'--seclect--'}>--seclect--</option>
                        <option value={'React js'}>React js</option>
                        <option value={'angular'}>angular</option>
                        <option value={'javascript'}>javascript</option>
                        <option value={'Node js'}>Node js</option>
                        <option value={'php'}>php</option>
                        <option value={'python'}>python</option>
                    </select>
                    <br/>
                    <br/>
                    <input type={'checkbox'} checked={isAwesome} onChange={this.handleClick}/>
                    <br/>
                    <input type={"text"} value={undefined} />
                    <br/>
                    <input type={"submit"} value={'submit'}/>
                </form>
            </div>
        )
    }
}

export default Form


