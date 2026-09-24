
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
       
       let obj={
        id:todos.length+1,
        task:task,
        isCompleted:false
       }

       todos=[...todos,obj];
       useTodos(todos)
       useTask("")

   }

   function deleteTask(idx){
    let newArr=todos.filter((todo,index)=>index!==idx)
    useTodos(newArr)

   }
   function completeTask(idx){
    
    let newArr=[];
    for(let i=0;i<todos.length;i++){
      if(i===idx){
        todos[i].isCompleted=true;
      }
      newArr.push(todos[i])
    }
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
        todos.map((todo, idx)=> <li style={{backgroundColor:todo.isCompleted?"green":"red"}} >{todo.task}
          <button >Delete</button> 
        <button  >complete</button>
            </li>)
      }
      
      </ul>
   </div>
   </div>)
}
export default App;