const mongoose = require('mongoose')

const mailSchema = new mongoose.Schema({
    sender : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiver : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, required: true },
    content: { type: String, required: true },
    tag : {type : mongoose.Schema.Types.ObjectId, ref : 'Tag'},
    deleted : {type : Boolean, default : false}
})

const Mail = mongoose.model('Mail', mailSchema)
module.exports = { Mail }