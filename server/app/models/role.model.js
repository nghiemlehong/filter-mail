const mongoose = require('mongoose')
const roleSchema = new mongoose.Schema({
    name: { type: String, required: true , unique : true},
    mails : [{type : mongoose.Schema.Types.ObjectId, ref : 'Mail'}]
})
const Role = mongoose.model('Role', roleSchema)

module.exports = { Role }