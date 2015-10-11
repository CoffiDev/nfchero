var game = {
  maxHealth: 10,
  time: 10,
  desc: 'Try to escape this maze',
  image: 'images/nothing.jpeg',

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

  deck: [
    {
      type: 'potion',
      health: 5,
      desc: 'Misterious little bottle',
      image: 'images/potion.png',
      usedSound: 'sounds/potion-drink.wav'
    },
    {
      type: 'weapon',
      damage: 2,
      duration: 3,
      desc: 'Hard wood weapon',
      image: 'images/maze.gif',
      usedSound: 'sounds/mace.wav'
    },
    {
      type: 'weapon',
      damage: 45,
      duration: 1,
      desc: 'Sharp long sword',
      image: 'images/sword.gif',
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
      desc: 'Walking skeleton',
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
      desc: 'An orc throwing fire',
      image: 'images/orc.gif',
      weapon: {
        type: 'weapon',
        damage: 4,
        duration: 2,
        desc: 'bola de fuego',
        image: 'images/fire.gif',
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
