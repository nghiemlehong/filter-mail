const { Mail } = require('../models/mail.model')
const { exist } = require('../models/my-error.model')
const { User } = require('../models/user.model')
const { Role } = require('../models/role.model')

class MailService {
    static async createMail(senderUsername, receiverUsername, title, content) {
        exist(title, 'TITLE_EMPTY', 404)
        exist(content, 'CONTENT_EMPTY', 404)
        const sender = await User.findOne({ username: senderUsername })
        exist(sender, 'USER_NOT_EXIST', 404)
        const receiver = await User.findOne({ username: receiverUsername })
        exist(receiver, 'USER_NOT_EXIST', 404)
        const mail = new Mail({
            sender: sender._id,
            receiver: username._id,
            title,
            content,
            role: '5fabc39a43fce02994b42d0f'
        })
        await User.findByIdAndUpdate(sender._id,)
        await mail.save()
        return mail
    }
}

module.exports = { MailService }