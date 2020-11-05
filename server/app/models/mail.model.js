const mongoose = require('mongoose')

const mailSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User'}
    

})