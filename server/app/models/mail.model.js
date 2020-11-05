const mongoose = require('mongoose')

const mailSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    content: { type: String, required: true }

})

const Mail = mongoose.model('Mail', mailSchema)
module.exports = { Mail }