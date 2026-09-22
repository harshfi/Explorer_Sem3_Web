import { useState } from "react";


function App(){
    let [counter,useCounter]=useState(0);

    function incremnet(){
        // useCounter(counter+1);
        counter++;
        useCounter(counter)
        // console.log(counter)
    }

    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={()=>useCounter(counter+1)}>Increment</button>
            <button onClick={()=>useCounter(counter-1)} >Decrement</button>
            <button onClick={()=>useCounter(0)}>Reset</button>
        </div>
    )
}

export default App;