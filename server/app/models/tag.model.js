const mongoose = require('mongoose')
const tagSchema = new mongoose.Schema({
    name: { type: String, required: true , unique : true},
    mails : [{type : mongoose.Schema.Types.ObjectId, ref : 'Mail'}]
})
const Tag = mongoose.model('Tag', tagSchema)

module.exports = { Tag }