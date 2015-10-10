var _ = require('lodash');

var express = require('express');
var router = express.Router();

var mongoose = require('../models/models');

var game_template = require('./game_template');

var games = {};

router.get('/hola', function(req, res, next) {
  destroyGame(req);
  createNewGame(req, res, function() {});
  res.send(req.game);
});

router.use(createNewGame);

router.get('/:tag', function(req, res, next) {
  var tagNumber = parseInt(req.params.tag);

  var game = req.game;
  var card = game.deck[tagNumber];

  if (card) {

    if (card.type === 'minion' || card.type === 'boss') {
      attack(game.player, card);
      if (card.health > 0) {
        attack(card, game.player);
      } else {
        game.deck[tagNumber] = null;
      }

      if (game.player.health < 0) {
        destroyGame(req);
        res.send({game: 'over'});
      }
    }

    if (card.type === 'potion') {
      if (game.maxHealth !== game.player.health) {
        game.player.health = Math.min(
          game.maxHealth, card.health + game.player.health);
        game.deck[tagNumber] = null;
      }
    }

    if (card.type === 'weapon') {
      game.player.weapon = card;
      game.deck[tagNumber] = null;
    }
  }


  console.log("====================> ", game);

  res.send(game);
});


function attack(attacker, to) {
  if (attacker.weapon) {
    attacker.weapon.duration -= 1;
    to.health -= attacker.weapon.damage;
    if (attacker.weapon.duration < 1) {
      attacker.weapon = null;
    }
  } else {
    to.health -= attacker.damage;
  }
}


function destroyGame(req) {
  var sessionId = req.sessionID;
  games[sessionId] = null;
}

function createNewGame(req, res, next) {
  var sessionId = req.sessionID;
  if (!games[sessionId]) {
    games[sessionId] = _.cloneDeep(game_template);
  }
  req.game = games[sessionId];
  next();
}
module.exports = router;
