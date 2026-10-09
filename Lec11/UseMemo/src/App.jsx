import { useMemo, useState } from 'react'


function App() {
 
  const [num,setNum]=useState(100000);
  
  // let prime=100000;
  let cnt=0;
  
  // let prime= useMemo(()=>{
    

    // for(let i=3;i<=num;i++){ //N
    //   let temp=0;
    //   for(let j=2;j<(i);j++){ 
    //       if(i%j==0){
    //         temp=1
    //         break;
    //       }
    //   }
    //   if(temp==0) cnt++;
    // }
      


  //   console.log("find finction is running")
  //   return cnt;

  
  // },[num])

        function useCallBack(){
            
          
          console.log("here is the function "+cnt);
        }

       
  
  return (

    <>
     <h1>Count {count}</h1>
     <button onClick={useCallBack}>increase</button>
     <h1 >Prime {prime}</h1>
     <button onClick={()=>setNum(num+100)}>increaseNum</button>
    </>
  )
}

export default App
