
import { useState } from "react";
import './app.css'

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

   function deleteTask(idx){
    let newArr=todos.filter((todo,index)=>index!==idx)
    useTodos(newArr)

   }

  return (<div className="App">
  <h1 style={{textAlign:"center"}}>Todo List</h1>
   <div>
    <input value={task} onChange={changeTask} type="text" />
    <button onClick={addTask}>add</button>
   </div>
   <div>
    <ul>
      Todos
      {
        todos.map((todo,idx)=> <li key={idx}>{todo}  <button onClick={()=>deleteTask(idx)}>Delete</button>
            </li>)
      }
      
      </ul>
   </div>
   </div>)
}
export default App;