
let input = document.getElementById('input');
let btn= document.getElementsByClassName('btn');

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
})

   

