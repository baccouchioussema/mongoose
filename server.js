const express = require('express');
require("dotenv").config({path:"./config/.env"});
const conectDB = require("./DB/conectDB");

const app = express();
const mongoose = require('mongoose');
const {Schema , model} = mongoose ;

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0
  },
  favoriteFoods: [String]
});




const Person = mongoose.model('Person', PersonSchema);
var createAndSavePerson = function (done) {
    const person = new Person({
        name: 'rayen',
        age: 18,
        favoriteFoods: ['water']
    });

    person.save((err, data) => {
        console.log(data);
        if (err) {
            done(err);
        }

        done(null, data);
    })
};


Person.create([
    { name: 'oussema', age: '20', favoriteFoods: ["pitza"] },
    { name: 'ALI', age: '40', favoriteFoods: ['tiramiso'] } ])








const PORT = process.env.PORT|| 8000;
conectDB();
app.listen(PORT ,(err)=>{
    err?
    console.log(err)
    :console.log(`èserver is running on port ${PORT}`)
});







  
 