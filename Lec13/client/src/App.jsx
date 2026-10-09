import { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css'


function App() {
  const [products,setProduct]= useState([]);

  useEffect(()=>{
    const p= async()=>{
      const pro=await axios.get('http://localhost:3000/getProducts');
      console.log(pro.data);
      setProduct(pro.data);
    }

    p();
    console.log(products)
  },[])

  async function deleteProduct(id){
      
   const data= await axios.delete(`http://localhost:3000/delete/${id}`)

   setProduct(data.data)

  }

  return (
    <>
     <h1>Hola amigo</h1>
     <div className='cards'>
     { products &&
       products.map((pro)=> 
       
        <div key={pro._id} className='card'>
          <img className="img" src={pro.img} alt=""  />
          <h3>{pro.name}</h3>
          <span>{pro.price}</span>
          <p>{pro.disc}</p>
          <button onClick={()=>deleteProduct(pro._id)}>Delete</button>
        </div>
      )
     }
     </div>
    </>
  )
}

export default App
