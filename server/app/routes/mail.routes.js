const {MailService} =require('../services/mail.service')
const express = require('express')
const {mustBeUser} =require('./mustBeUser.middleware')
const mailRouter = express.Router()

mailRouter.post('/',mustBeUser,(req,res)=>{
    const {title, content} = res.body
    MailService.createMail()
    .then(mail => res.send({success : true, mail}))
    .catch(req.onError)
})

module.exports ={mailRouter}