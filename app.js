const express=require("express");
const app=express();
const port=3000;
app.get("/",(req,res)=>{
res.send("<h1>Demo App </h1> <p> this is a new pipeline </p>");
})
app.get("/products",(req,res)=>{
    res.send([{
        productId:"101",
        price:100
    },{
        productId:"102",
        price:150
    }])
})
app.listen(port,()=>{
    console.log(`Demo app running on Port:${port}`)
})