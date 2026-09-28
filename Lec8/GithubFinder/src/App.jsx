import { useEffect, useState } from 'react'
import './app.css'
function App() {
  
  let [id,setId]= useState("");
  let [data,setData]= useState(null)

  // let data=""
  
  async function  handleSearch(){
     
    const profile= await fetch(`https://api.github.com/users/${id}`);

    const details= await profile.json();
    // console.log(details)
    data=details
   setData(data)
    // console.log(details.avatar_url)
    console.log(data)
      
  }

  

  return (
    <>
    
     <div className="form">
      <input value={id} onChange={(e)=>setId(e.target.value)} className='input' type="text" />
      <button onClick={handleSearch} className='btn'>Search</button>
     </div>
     {
        data &&
        <div className='card'>
          <div className="ProfileData">
            <img src={data.avatar_url} alt="imgNotFound" />
          </div>
          <div className="coding"></div>
        </div>
     }
    </>
  )
}

export default App
