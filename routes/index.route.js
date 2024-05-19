const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/games", indexController.games_get)
router.get("/game/:id", indexController.game_get)

router.get("/findables", indexController.findables_get)
router.get("/findable/:id", indexController.findable_get)

router.get("/leaderboards", indexController.leaderboards_get)
router.get("/leaderboard/:gameId", indexController.leaderboard_get)
router.post("/leaderboard/:gameId", indexController.leaderboard_post)

module.exports = router;
