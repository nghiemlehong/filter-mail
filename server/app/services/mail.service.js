const {Mail} = require('../models/mail.model')
const {} = require('../')
const {} = require('')


class MaiService{
    static async getByRole(_id){
        const mails = Mail.findById({role : _id})
    }
}