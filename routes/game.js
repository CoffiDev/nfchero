var _ = require('lodash');

var express = require('express');
var router = express.Router();

var mongoose = require('../models/models');

var game_template = require('./game_template');

var games = {};

router.get('/null/:tag', function(req, res, next) {
  var game = newGame();
  games[game.key] = game;
  req.params.key = game.key;
  next();
});

router.get(':key/:tag', function(req, res, next) {
  var tagNumber = parseInt(req.params.tag);

  var game = games[req.params.key];
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
      var currentWeapon = game.player.weapon;
      game.player.weapon = card;
      game.deck[tagNumber] = currentWeapon;
    }
  }


  var data = {
    key: game.key,
    player: game.player,
    card: card
  };

  console.log("====================> ", game);
  console.log("----> ", data);

  res.send(data);

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
  var gameKey = req.params.key;
  if (gameKey) {
    games[gameKey] = null;
  }
}

function newGame() {
  var game = _.cloneDeep(game_template);
  game.key = require('node-uuid').v4();
  return game;
}


module.exports = router;
