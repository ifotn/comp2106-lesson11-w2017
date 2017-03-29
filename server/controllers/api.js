/**
 * Created by RFreeman on 3/29/2017.
 */
let express = require('express');
let router = express.Router();

let Game = require('../models/game');

// get all
router.get('/', function (req, res, next) {
    Game.find(function (err, games) {
       if (err) {
           return res.send(err).status(501);
       }

       res.json(games);
    });
});

module.exports = router;
