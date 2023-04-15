const mongoose = require("mongoose");
require("dotenv").config({path:"../config/.env"});

const conectDB = async ()=>{
    try{
        await mongoose.connect(process.env.mongoURI)
        console.log("database conected...")
    } catch (error) {
console.log(" err  : " ,error )
    }
}


module.exports = conectDB