const { Tag } = require('../models/tag.model')
const { exist, ServerError } = require('../models/my-error.model')

class TagService {
    static async createTag(name) {
        exist(name, "NAME_EMPTY", 404)
        try {
            const tag = new Tag({ name })
            await tag.save()
            return tag
        }
        catch (err) {
            throw new ServerError('TAG_EXIST',419)
        }
    }
}

module.exports = { TagService }