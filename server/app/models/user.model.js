const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    name : {type : String, required : true},
    mail : [{type : mongoose.Schema.Types.ObjectId, ref : 'Mail'}]
})
const User = mongoose.model('User', userSchema)

module.exports = {User}