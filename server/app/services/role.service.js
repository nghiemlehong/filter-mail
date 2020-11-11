const {Role} = require('../models/role.model')
const {exist, ServerError} = require('../models/my-error.model')

class RoleService
{
    static async createRole(name)
    {
        exist(name, "NAME_EMPTY", 404)
        const role = new Role({name})
        await role.save()
        return role
    }
}

module.exports = {RoleService}