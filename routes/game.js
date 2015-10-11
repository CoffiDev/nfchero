var _ = require('lodash');

var express = require('express');
var router = express.Router();

var mongoose = require('../models/models');

var game_template = require('./game_template');

var games = {};

router.get('/:key/:tag/:btn?', function(req, res, next) {
  var btn = req.params.btn || 0;
  var game = games[req.params.key];

  if (req.params.key === 'null' || (game && game.player.health < 1))  {
    var game = newGame();
    games[game.key] = game;
  }

  var tagNumber = parseInt(req.params.tag);
  var card = game.deck[tagNumber];
  var result = {};

  if (card) {
    play(result, card, game, tagNumber);
  }

  var data = {
    key: game.key,
    player: game.player,
    card: result.card,
    action: result.action || 'Nada ha pasado',
    over: !!result.over
  };

  console.log("<---", btn);
  console.log("====================> ", game);
  console.log("----> ", data);

  res.send(data);

});

function play(result, card, game, tagNumber) {
  var type = card.type;
  var action = '';

  if (type === 'minion' || type === 'boss') {
    action = "Estas en combate";

    attack(game.player, card);
    if (card.health > 0) {
      attack(card, game.player);
    } else {
      game.deck[tagNumber] = null;
    }

    if (game.player.health < 1) {
      action = "Te han eliminado";
      result.over = true;
    } else if (card.health < 1){
      action = "Eliminaste un enemigo";
    }
  }

  if (type === 'potion') {
    if (game.maxHealth !== game.player.health) {
      game.player.health = Math.min(
        game.maxHealth, card.health + game.player.health);
      game.deck[tagNumber] = null;

      action = "Has consumido una posion";
    }
  }

  if (type === 'weapon') {
    var currentWeapon = game.player.weapon;
    game.player.weapon = card;
    game.deck[tagNumber] = currentWeapon;

    action = "Has tomado un arma";
    if (currentWeapon) {
      action = "Cambiaste de arma";
    }
  }

  result.card = card;
  result.action = action;
}


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

  to.health = Math.max(0, to.health);
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
