const express= require('express');
const app=express();
const mongoose=require('mongoose');
const feed=require('./seed')
const product=require('./model/product')
var cors = require('cors')




mongoose.connect('mongodb://127.0.0.1:27017/Shopfiy')
.then(()=>{
    console.log("DB has been connected")
})
app.use(cors())
// feed()

app.get('/getProducts',async(req,res)=>{
    const products=await product.find();
    res.send(products)
})



app.listen(3000,()=>{
    console.log("backend chal raha hain")
})