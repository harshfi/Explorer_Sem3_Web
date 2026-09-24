import { useState } from 'react'


function App() {
  
  let [quotes,useQuotes]=useState([])

  async function fetchQuotes(){
  let res= await fetch('https://dummyjson.com/quotes')
   let data=await res.json()
   data=(data.quotes)
    useQuotes(data)
    console.log(quotes)
  } 
  fetchQuotes()
  return (
    <>
    <ul>
      {
        quotes.map((quote,idx)=><li key={idx}>{quote}</li>)
      }
    </ul>
    </>
  )
}

export default App
