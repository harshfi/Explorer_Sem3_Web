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

  return (
    <>
     <h1>Hola amigo</h1>
     <div>
     { products &&
       products.map((pro)=> 
       
        <div className='card'>
          <img className="img" src={pro.img} alt=""  />
          <h3>{pro.name}</h3>
          <span>{pro.price}</span>
          <p>{pro.disc}</p>
        </div>
      )
     }
     </div>
    </>
  )
}

export default App
