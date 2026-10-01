import { useState } from 'react'
import Sum from './Sum';

function App() {
  const [count, setCount] = useState(0)
   
  return (
    <>
     <h1>Counter:{count}</h1>
     <button onClick={()=> setCount(count+1)}>Increase me</button>
     <Sum></Sum>
    </>
  )
}

export default App
