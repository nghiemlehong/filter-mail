const { MailService } = require('../services/mail.service')
const express = require('express')
const { mustBeUser } = require('./mustBeUser.middleware')
const mailRouter = express.Router()

mailRouter.post('/', mustBeUser, (req, res) => {
    const { receiverUsername, title, content, tag } = req.body
    MailService.createMail(req.idUser, receiverUsername, title, content,tag)
        .then(mail => res.send({ success: true, mail }))
        .catch(res.onError)
})

mailRouter.post('/getMail', mustBeUser, (req, res) => {
    const { tagName } = req.body
    MailService.getMailByIdUser(req.idUser, tagName)
        .then(mails => res.send({ success: true, mails }))
        .catch(res.onError)
})

mailRouter.delete('/:_id', mustBeUser, (req, res) => {
    const { _id } = req.params
    MailService.deleteMail(_id)
        .then(mail => res.send({ success: true, mail }))
        .catch(res.onError)
})

module.exports = { mailRouter }