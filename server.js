const express=require("express");
const https=require("https");
var cors = require('cors')
//const bodyparser=require("body-parser");
const app=express();

app.use(cors())

var voter=[];

function addVoter(nid, name, age, gender){
    voter.push({nid:nid, name:name, age:age, gender:gender});
}

addVoter('1234567890', "Abdur Rahman", 35, "male");
addVoter('2411896197', "Yusuf Jalil", 27, "male");
addVoter('1849461535', "Ranjit Chandra Das", 62, "male");
addVoter('4998162303', "Humaira Begum", 43, "female");
addVoter('9849881656', "Partha Gomez", 39, "male");
addVoter('9844951666', "Afia Khatun", 56, "female");
addVoter('1698481568', "Priti Chowdhury", 78, "female");
addVoter('8498116799', "Motahera Jahan", 19, "female");



app.get("/get_voter", (req, res) => {
    res.send(voter);
  });

// start the server listening for requests
app.listen(process.env.PORT || 4000, 
	() => console.log("Server is running..."));