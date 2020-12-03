const { TagService } = require('../services/tag.service')
const express = require('express')

const tagRouter = express.Router()

tagRouter.post('/', (req, res) => {
    const { name } = req.body
    TagService.createTag(name)
        .then(tag => res.send({ success: true, tag }))
        .catch(res.onError)
})

module.exports = {tagRouter}