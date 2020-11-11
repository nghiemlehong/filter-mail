const { RoleService } = require('../services/role.service')
const express = require('express')

const roleRouter = express.Router()

roleRouter.post('/', (req, res) => {
    const { name } = req.body
    RoleService.createRole(name)
        .then(role => res.send({ success: true, role }))
        .catch(req.onError)
})

module.exports = {roleRouter}