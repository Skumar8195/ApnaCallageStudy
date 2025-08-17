const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/hello",(req,res)=>{
    res.send("Hello....");
    console.log("call hello")
})

// Passing data to EJS file like data come from database
/// Apply conditional statement in this page
app.get("/rolldice",(req,res)=>{
    let diceVale = Math.floor(Math.random()* 6)+1;
    res.render("rolldice.ejs",{num:diceVale});
})

// Instagram EJS EX
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    //Get data from other file .json file
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs",{username});
    }
    
})







app.listen(port,()=>{
    console.log(`Listening port number ${port}`);
})

