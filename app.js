const express = require("express");
const app = express();

app.use(express.static(__dirname+'/src/assets'));

app.get("/duvidas-nep",(req,res)=>{
res.sendFile(__dirname+"/src/assets/public/duvidas-nep/index.html");
})

app.get("/cartilha",(req,res)=>{
res.sendFile(__dirname+"/src/assets/public/cartilha/index.html");
})

app.get("/cartilha2",(req,res)=>{
res.sendFile(__dirname+"/src/assets/public/cartilha2/index.html");
})

app.get("/boletins",(req,res)=>{
res.sendFile(__dirname+"/src/assets/public/boletins/servicos.html");
})

app.listen("8080",()=>{})

