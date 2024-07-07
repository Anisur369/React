import React from 'react'
import ReactDOM from 'react-dom/client'

let states=[];//[0;[value,setter]1:[value,setter]]
let stateIndex=-1;

function useState(defaultValue){
  const index=++stateIndex;
  if(states[index])return states[index];

  const setValue=(newValue)=>{
    states[index][0]=newValue;
    renderWithSumit()
  }  
  const returnArray=[defaultValue,setValue];
  states[index]=returnArray
  return returnArray;
}

function App(){
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
function renderWithSumit(){
  stateIndex=-1;
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
  )
}
renderWithSumit();