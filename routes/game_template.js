var game = {
  maxHealth: 10,
  time: 10,

  player: {
    health: 10,
    punch: {
      type: 'punch',
      damage: 1,
      desc: 'Punch',
      image: 'images/fist.jpg'
    },
    weapon: null,
    usedSound: 'sounds/player-dies.wav'
  },

  desc: 'Estas en un laberinto intentando escapar',
  image: 'images/nothing.jpeg',

  deck: [
    {
      type: 'potion',
      health: 5,
      desc: 'Un peque;o frasco azul',
      image: 'images/potion.png',
      usedSound: 'sounds/potion-drink.wav'
    },
    {
      type: 'weapon',
      damage: 2,
      duration: 3,
      desc: 'Un martillo',
      image: 'images/hammer.jpeg',
      usedSound: 'sounds/mace.wav'
    },
    {
      type: 'weapon',
      damage: 45,
      duration: 1,
      desc: 'Un hacha',
      image: 'images/axe.jpeg',
      usedSound: 'sounds/sword.wav'
    },
    {
      type: 'minion',
      health: 4,
      punch: {
        type: 'punch',
        damage: 2,
        desc: 'Punch',
        image: 'images/fist.jpg',
        usedSound: 'sounds/monster-bones-alive.ogg'
      },
      desc: 'Un esqueleto salvaje',
      image: 'images/skull.gif',
      usedSound: 'sounds/monster-bones-dies.wav'
    },
    {
      type: 'minion',
      health: 4,
      punch: {
        type: 'punch',
        damage: 2,
        desc: 'Punch',
        image: 'images/fist.jpg',
        usedSound: 'sounds/monster-orc-alive.wav'
      },
      desc: 'Un orco armado',
      image: 'images/orc.gif',
      weapon: {
        type: 'weapon',
        damage: 4,
        duration: 2,
        desc: 'palo',
        image: 'images/palo.jpeg',
        usedSound: 'sounds/monster-orc-dies.wav'
      }
    },
    {
      type: 'boss',
      health: 40,
      punch: {
        type: 'punch',
        damage: 20,
        desc: 'Punch',
        image: 'images/fist.jpg',
        usedSound: 'sounds/monster-humanlike-alive.wav'
      },
      desc: 'Nicolas Cage',
      image: 'images/boss.gif',
      usedSound: 'sounds/monster-humanlike-dies.wav'
    }
  ]
}

module.exports = game;
