const { Mail } = require('../models/mail.model')
const { exist } = require('../models/my-error.model')
const { User } = require('../models/user.model')
const { Role } = require('../models/role.model')

class MailService {
    static async createMail(idSender, receiverUsername, title, content,roleName) {
        exist(title, 'TITLE_EMPTY', 404)
        exist(content, 'CONTENT_EMPTY', 404)
        const receiver = await User.findOne({ username: receiverUsername })
        exist(receiver, 'USER_NOT_EXIST', 404)
        const role = await Role.findOne({ name: roleName })
        exist(role, "CANT_FIND_ROLE", 404)
        const mail = new Mail({
            sender: idSender,
            receiver: receiver._id,
            title,
            content,
            role: role._id
        })
        await User.findByIdAndUpdate(idSender, { $push: { mails: mail._id } })
        await Role.findByIdAndUpdate(role._id, { $push: { mails: mail._id } })
        await mail.save()
        return mail
    }

    static async getMailByIdUser(idReceiver, roleName) {
        exist(roleName, 'ROLE_EMPTY', 404)
        const role = await Role.findOne({ name: roleName })
        exist(role, 'CANT_FIND_ROLE', 404)
        const mails = Mail.find({ receiver: idReceiver, role: role._id, deleted: false })
            .populate('sender', 'name')
        return mails
    }

    static async deleteMail(idMail) {
        const mail = await Mail.findByIdAndUpdate(idMail, { $pull: { deleted: true } })
        exist(mail, 'MAIL_NOT_FOUND', 404)
        return mail
    }
}

module.exports = { MailService }