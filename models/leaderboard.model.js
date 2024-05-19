const mongoose = require('mongoose')
const schema = mongoose.Schema
const leaderboardModelSchema = new schema({ toppers: [{ type: schema.Types.Mixed }], gameId: { type: schema.Types.ObjectId, ref: "games" } })
module.exports = mongoose.model("leaderboards", leaderboardModelSchema)