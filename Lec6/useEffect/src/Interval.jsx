import { useState } from "react";
import { useEffect } from "react";


function Clock(){

    let [time,useTime]=useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        setInterval(()=>{
            console.log("tick")
            useTime(new Date().toLocaleTimeString())
        },1000)
    },[])

    return(
        <h1>{time}</h1>
    )

}
export default Clock