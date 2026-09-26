
const express=require('express');
const app=express();
const path=require('path')

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json()); 

// Middleware to accept HTML form submissions
app.use(express.urlencoded({ extended: true })); 

let arr=[];

function checked(req,res,next){
    console.log("i have checked")
    next();
    
}
function rightPerson(req,res,next){
let name = "harsh"
   if(name!="modi"){
    res.send("you are not the right person")
    return;
   }
   next()
}

function login(req,res,next){
console.log("kaise ho yr main toh login me hu ")
    res.send("Please login first");
    return ;
    
    
}

app.get('/',(req,res)=>{

    res.sendFile('/index.html')
})

app.post('/addTask',(req,res)=>{
    let {data}= req.body;
    arr.push(data);
    console.log(data);
    res.send("data have been added successfullly")
})

// app.get('/',rightPerson,login,(req,res)=>{
    
//     res.send("hlw ji")
// })
app.get('/hlw',(req,res)=>{
    res.send("kaise")
})

app.listen(3000,()=>{
    console.log("chal gaya ")
})