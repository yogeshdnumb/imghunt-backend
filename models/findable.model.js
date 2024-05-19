const mongoose = require('mongoose')
const schema = mongoose.Schema
const findableModelSchema = new schema({ img: String })

module.exports = mongoose.model("findables", findableModelSchema)