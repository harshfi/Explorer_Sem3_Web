
let p=document.getElementsByTagName('p');
let btn=document.getElementsByTagName('button')

let counter=0 

btn.addEventListner('click',(e)=>{
    counter++;
    p.textContent='counter : '+counter;
})