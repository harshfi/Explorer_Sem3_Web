import React from "react";

let Sum=React.memo(()=>{
   {
    console.log("im in the sum wala componet");

    let sum=0;
    for(let i=0;i<=1000000000;i++){
        sum+=i;
    }

    return (
        <>
         <h1>Sum:{sum}</h1>
        </>
    )
}

}
)

export default Sum;



