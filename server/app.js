const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require("./db/conn");
const routers = require("./routes/register")
const cors = require('cors'); 
const User = require("./db/model");

app.use(cors());
app.use(bodyParser.json());


app.use("/api/register", routers);



app.get("/", async(req,res)=>{
  
    res.send("Hi i am form Server Sidde");
})
connection().then(()=>
{
    app.listen(3000,(req,res)=>{
        console.log("i am listning");
    })

});
