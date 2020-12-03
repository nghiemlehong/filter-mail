const { Mail } = require('../models/mail.model')
const { exist } = require('../models/my-error.model')
const { User } = require('../models/user.model')
const { Tag } = require('../models/tag.model')

class MailService {
    static async createMail(idSender, receiverUsername, title, content,tagName) {
        exist(title, 'TITLE_EMPTY', 404)
        exist(content, 'CONTENT_EMPTY', 404)
        const receiver = await User.findOne({ username: receiverUsername })
        exist(receiver, 'USER_NOT_EXIST', 404)
        const tag = await Tag.findOne({ name: tagName })
        exist(tag, "CANT_FIND_TAG", 404)
        const mail = new Mail({
            sender: idSender,
            receiver: receiver._id,
            title,
            content,
            tag: tag._id
        })
        await User.findByIdAndUpdate(idSender, { $push: { mails: mail._id } })
        await Tag.findByIdAndUpdate(tag._id, { $push: { mails: mail._id } })
        await mail.save()
        return mail
    }

    static async getMailByIdUser(idReceiver, tagName) {
        exist(tagName, 'TAG_EMPTY', 404)
        const tag = await Tag.findOne({ name: tagName })
        exist(tag, 'CANT_FIND_TAG', 404)
        const mails = Mail.find({ receiver: idReceiver, tag: tag._id, deleted: false }).sort({_id :-1})
            .populate('sender', 'name')
        return mails
    }

    static async deleteMail(idMail) {
        const mail = await Mail.findByIdAndUpdate(idMail, { $set: { deleted: true } })
        exist(mail, 'MAIL_NOT_FOUND', 404)
        return mail
    }
}

module.exports = { MailService }