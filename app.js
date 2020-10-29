const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.listen(3000,function(){
  console.log("We are live in port 3000");
});
