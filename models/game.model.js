const mongoose = require('mongoose')
const schema = mongoose.Schema
const gameModelSchema = new schema({ img: String, findables: [{ type: schema.Types.ObjectId, ref: "findables" }], leaderboard: { type: schema.Types.ObjectId, ref: "leaderboars" } })

module.exports = mongoose.model("games", gameModelSchema)