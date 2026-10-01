// const { default: axios } = require("axios");

let input = document.getElementById('input');
let btn= document.getElementsByClassName('btn');
let ul= document.querySelector('ul')
// let data=""
// input.addEventListener('change',(e)=>{
//    data=e.target.value
// })

console.log(btn);
btn[0].addEventListener('click', (e)=>{
   let data = input.value;
    console.log(data);

axios
  .post("/addTask", {data})
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Request completed");
  });

   render();

   input.value=""

})

async function render(){
    axios.get('/getTask')
    .then((res)=>{
       let data=(res.data.data);
        ul.textContent="";
      for(let i=0;i<data.length;i++){
         let li= document.createElement('li');
         li.textContent=data[i];
         ul.append(li);
      }
    })
  }
    

   

