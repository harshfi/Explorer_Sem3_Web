
import { useState } from "react";

function App(){
   let [task,useTask]= useState("")
   let [todos,useTodos]= useState([])

   function changeTask(e){
        task=e.target.value
        useTask(task)
          console.log(task)
   }

   function addTask(){
       if(task.trim()==="")return;

       todos=[...todos,task];
       useTodos(todos)
       useTask("")

   }

  return (<div className="App" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
  <h1 style={{textAlign:"center"}}>Todo List</h1>
   <div>
    <input value={task} onChange={changeTask} type="text" />
    <button onClick={addTask}>add</button>
   </div>
   <div>
    <ul>
      Todos
      {
        todos.map((todo,idx)=> <li key={idx}>{todo} 
            </li>)
      }
      
      </ul>
   </div>
   </div>)
}
export default App;