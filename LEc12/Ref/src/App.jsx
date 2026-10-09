import { useRef } from 'react';
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  // let cnt=useRef(0);
  let videoControl=useRef(null);

  // let btnRef=useRef(null);

  // function bhai(){
  //   // cnt.current=cnt.current+1
  //   // console.log(cnt.current)
  // if(btnRef.current)
  //   btnRef.current.style.backgroundColor='red'
  // }

//  bhai()

   function play(){
    videoControl.current.play();
   }
   function stop(){
    videoControl.current.pause()
   }
   function reset(){
    videoControl.current.currentTime=0
   }
   function fastForward(){
    videoControl.current.currentTime=videoControl.current.currentTime+10;
   }


  return (
    <>
     {/* <h1>hlw : {count}</h1>
     <button ref={btnRef} onClick={()=>setCount(count+1)} >increase</button> */}

     <video ref={videoControl} src="v.mp4" controls></video>
     <button onClick={play}>play</button>
     <button onClick={stop}>Stop</button>
     <button onClick={reset}>Reset</button>
     <button onClick={fastForward}>+10</button>
    </>
  )
}

export default App
