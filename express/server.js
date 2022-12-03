'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(cors())

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

const router = express.Router();
router.get('/', urlencodedParser, (req, res) => {
  res.send(voter);
});

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', urlencodedParser, (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);