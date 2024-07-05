import { useState } from "react";

function Todo(){
    const [todo,setTodo]=useState('');
    const [warning,setWarnign]=useState('');
    const handleInput=(e)=>{
        const inputValue=e.target.value;
        const warning=inputValue.includes('.js')?"You need JavaScript skill to complete the task. Do you have it?":null;
        setTodo(inputValue);
        setWarnign(warning)
    }
    return (
        <div>
            <p></p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput}/>
            </p>
            <h2>{warning || 'Good choice!'}</h2>
            <h1>Don't toch my Computer</h1>
        </div>
    )
}
export default Todo;