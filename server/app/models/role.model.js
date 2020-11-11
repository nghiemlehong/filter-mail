const mongoose = require('mongoose')
const roleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail : [{type : mongoose.Schema.Types.ObjectId, ref : 'Mail'}]
})
const Role = mongoose.model('Role', roleSchema)

module.exports = { Role }