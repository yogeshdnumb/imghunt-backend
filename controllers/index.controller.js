const findableModel = require("../models/findable.model.js");
const gameModel = require("../models/game.model.js")
const asyncHandler = require('express-async-handler');
const leaderboardModel = require("../models/leaderboard.model.js");

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// Games
exports.games_get = [asyncHandler(async function (req, res, next) {
  const games = await gameModel.find().populate("img");
  // console.log(games);
  res.send(games)
})]

exports.game_get = asyncHandler(async function (req, res, next) {
  // await sleep(1000)
  const game = await gameModel.findOne({ _id: req.params.id }).populate("findables");
  // console.log(game);
  res.json(game)
})

// Findables
exports.findable_get = asyncHandler(async function (req, res, next) {
  const findable = await findableModel.findOne({ _id: req.params.id })
  // console.log(findable);
  res.json(findable)
})

exports.findables_get = asyncHandler(async function (req, res, next) {
  const findables = await findableModel.find({})
  // console.log(findables);
  res.json(findables)
})

// Leaderboard
exports.leaderboards_get = asyncHandler(async function (req, res, next) {
  const leaderboards = await leaderboardModel.find({})
  res.json(leaderboards)
})

exports.leaderboard_get = asyncHandler(async function (req, res, next) {
  const leaderboard = await leaderboardModel.findOne({ gameId: req.params.gameId }, "toppers")
  res.json(leaderboard)
})

exports.leaderboard_post = asyncHandler(async function (req, res, next) {
  const leaderboard = await leaderboardModel.findOne({ gameId: req.params.gameId }, "toppers")
  const tmp_arr = [...leaderboard.toppers]
  tmp_arr.push({ username: req.body.username, score: +req.body.score })
  tmp_arr.sort((a, b) => {
    if (a.score < b.score) { return -1 } else if (a.score > b.score) { return 1 } else { return 0 }
  })
  leaderboard.toppers = [...tmp_arr.slice(0, 5)]
  await leaderboard.save()
  res.sendStatus(200)
})