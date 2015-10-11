var _ = require('lodash');

var express = require('express');
var router = express.Router();

var mongoose = require('../models/models');

var game_template = require('./game_template');

var games = {};

router.get('/:key/:tag/:btn?', function(req, res, next) {
  var btnNumber = req.params.btn;
  var game = games[req.params.key];

  if (req.params.key === 'null' || (game && game.player.health < 1))  {
    var game = newGame();
    games[game.key] = game;
  }

  var tagNumber = parseInt(req.params.tag);
  var card = game.deck[tagNumber];
  var result = {key: game.key, card: card, player: game.player};

  if (card) {
    play(result, card, game, tagNumber, btnNumber);
  }

  result.action = result.action || "Nada ha pasado";
  result.over = !!result.over;

  console.log("====>\n", game);
  console.log("---->\n", result);

  res.send(result);
});

function playAttack(result, card, game, tagNumber, btnNumber) {
  var player = game.player;
  result.action = "Estas en combate";

  var playerWeapon = player.weapon && btnNumber === '1' ?
                        player.weapon : player.punch;
  attack(game.player, card, playerWeapon);

  if (card.health > 0) {
    var enemyWeapon = card.punch;
    if (card.weapon && player.health > card.punch.damage) {
      enemyWeapon = card.weapon;
    }
    result.sound = enemyWeapon.usedSound;
    attack(card, game.player, enemyWeapon);
  } else {
    game.deck[tagNumber] = null;
  }

  if (player.health < 1) {
    result.action = "Estas muerto";
    result.over = true;
    result.sound = game.player.usedSound;
  } else if (card.health < 1){
    result.action = "Mataste un enemigo";
    result.sound = card.usedSound;
  }
}

function play(result, card, game, tagNumber, btnNumber) {
  var player = game.player;
  var type = card.type;
  result.choose = false;

  if (type === 'minion' || type === 'boss') {
    if ( !btnNumber && game.player.weapon) {
      result.action = "Selecciona tu ataque";
      result.choose = true;
    } else {
      playAttack(result, card, game, tagNumber, btnNumber);
    }
  }

  if (type === 'potion') {
    if (game.maxHealth !== game.player.health) {
      game.player.health = Math.min(
        game.maxHealth, card.health + game.player.health);
      game.deck[tagNumber] = null;

      result.action = "Consumiste una posion";
      result.sound = card.usedSound;
    }
  }

  if (type === 'weapon') {
    var currentWeapon = game.player.weapon;
    game.player.weapon = card;
    game.deck[tagNumber] = currentWeapon;

    result.action = "Tomaste un arma";
    result.sound = card.usedSound;

    if (currentWeapon) {
      result.action = "Cambiaste de arma";
      result.card = currentWeapon;
    }
  }
}


function attack(attacker, to, weapon) {
  weapon = weapon || attacker.punch;

  to.health -= weapon.damage;
  to.health = Math.max(0, to.health);

  if (weapon.duration) {
    weapon.duration -= 1;
    if (weapon.duration < 1) {
      attacker[weapon.type] = null;
    }
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
