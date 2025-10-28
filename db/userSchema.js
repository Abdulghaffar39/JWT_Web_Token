const mongoose = require("mongoose")

const { Schema } = mongoose

const user = new Schema({

    firstName:{

        type: String,
        required: true
    }, 
    lastName:{
        
        type: String,
        required: true
    }, 
    email:{
        
        type: String,
        required: true
    }, 
    password:{
        
        type: String,
        required: true
    }

});


const userValue = mongoose.model("userValue", user);

module.exports = userValue;