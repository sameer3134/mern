const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.get('/',(req,res)=>{
    res.send("main");
});


app.listen(process.env.PORT,console.log("port 3001"));