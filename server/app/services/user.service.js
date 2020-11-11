const { compare, hash } = require('bcryptjs')
const { exist, ServerError } = require('../models/my-error.model')
const { User } = require('../models/user.model')
const {sign} = require('../helpers/jwt')

class UserService {
    static async signUp(username, plainPassword, name) {
        exist(username, 'USER_NAME_EMPTY', 400)
        exist(plainPassword, 'PASSSWORD_EMPTY', 400)
        exist(name, 'NAME_EMPTY', 400)
        try {
            const password = await hash(plainPassword, 8)
            const user = new User({ username, password, name })
            await user.save()
            user.password = undefined
            return user
        } catch (error) {
            throw new ServerError('USER_NAME_EXITS',419)
        }
    }

    static async login (username, password){
        exist(username, 'USER_NAME_EMPTY', 400)
        exist(password, 'PASSSWORD_EMPTY', 400)
        const user = await User.findOne({username})
        exist(user, 'USER_NOT_EXITS',404)
        const same = await compare(password, user.password)
        if(!same) throw new ServerError("PASSWORD_INCORRECT",419)
        user.password = undefined
        const userInfo = user.toObject()
        userInfo.token = await sign({_id : user._id})
        return userInfo
    }
}

module.exports = {UserService}