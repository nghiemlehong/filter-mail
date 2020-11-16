const { MailService } = require('../services/mail.service')
const express = require('express')
const { mustBeUser } = require('./mustBeUser.middleware')
const mailRouter = express.Router()

mailRouter.post('/', mustBeUser, (req, res) => {
    const { receiverUsername, title, content } = req.body
    MailService.createMail(req.idUser, receiverUsername, title, content)
        .then(mail => res.send({ success: true, mail }))
        .catch(res.onError)
})

mailRouter.post('/getMail', mustBeUser, (req, res) => {
    const { roleName } = req.body
    MailService.getMailByIdUser(req.idUser, roleName)
        .then(mails => res.send({ success: true, mails }))
        .catch(res.onError)
})

module.exports = { mailRouter }