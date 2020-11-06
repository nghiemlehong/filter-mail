const { compare, hash } = require('bcryptjs')
const { exist, ServerError } = require('../models/my-error.model')
const { User } = require('../models/user.model')

class UserService {
    static async signUp(username, plainPassword, name) {
        exist(username,'USER_NAME_EMPTY',400)
        exist(plainPassword,'PASSSWORD_EMPTY',400)
        exist(name,'NAME_EMPTY',400)
        try {
            const user = new User({ })
            
        } catch (error) {
            console.log(error)
            
        }

    }
}