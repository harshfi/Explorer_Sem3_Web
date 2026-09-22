import { useState } from "react"

export function Counter(){

    let [counter,useCounter]=useState(0);
    //[variable, function]=useState(intiall value)

//    let counter=0
    
//    function increament(){
//     counter++;
//    let p=document.getElementById('p');
//     p.textContent=`Counter: ${counter}`
//    }

function increment(){
    useCounter(counter+1)
}


    return (<>
    <p id='p'>Counter: {counter}</p>
    <button onClick={increment}>Increament</button>
    </>)
}