var game = {
  maxHealth: 10,
  time: 10,
  desc: 'You are trapped inside a maze, fight for your life!',
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
      desc: '-BLUE POTION- Use this flask to regain health.',
      image: 'images/potion.gif',
      usedSound: 'sounds/potion-drink.wav'
    },
    {
      type: 'weapon',
      damage: 3,
      duration: 2,
      desc: '-THORN MACE- (3)ATK/(2)DUR Equip it and smash heads.',
      image: 'images/maze.gif',
      usedSound: 'sounds/mace.wav'
    },
    {
      type: 'weapon',
      damage: 2,
      duration: 3,
      desc: '-HEROIC SWORD- (2)ATK/(3)DUR Equip it and swing it with honor, hero.',
      image: 'images/sword.gif',
      usedSound: 'sounds/sword.wav'
    },
    {
      type: 'weapon',
      damage: 3,
      duration: 1,
      desc: '-BOMB- (3)ATK/(1)DUR Equip it and throw it at the enemy. Single use.',
      image: 'images/bomb.gif',
      usedSound: 'sounds/bomb.wav'
    },
    {
      type: 'weapon',
      damage: 2,
      duration: 3,
      desc: '-SWIFT BOW- (2)ATK/(3)DUR Equip it and let the arrows rain.',
      image: 'images/bow.gif',
      usedSound: 'sounds/arrow.wav'
    },
    {
      type: 'weapon',
      damage: 4,
      duration: 1,
      desc: '-FIREBALL- (4)ATK/(1)DUR Equip it and burn the enemy. Single use.',
      image: 'images/fireball.gif',
      usedSound: 'sounds/fireball.wav'
    },
    {
      type: 'minion',
      health: 2,
      punch: {
        type: 'punch',
        damage: 3,
        desc: 'Punch',
        image: 'images/fist.jpg',
        usedSound: 'sounds/monster-humanlike-alive.ogg'
      },
      desc: '-NASTY ORC- "Wood is wasted in the dirt." -Orcish proverb',
      image: 'images/orc.gif',
      usedSound: 'sounds/monster-humanlike-dies.wav',
      weapon: {
       type: 'weapon',
       damage: 3,
       duration: 2,
       desc: '-THORN MACE- (3)ATK/(2)DUR Equip it and smash heads.',
       image: 'images/maze.gif',
       usedSound: 'sounds/mace.wav'
      }
    },
    {
      type: 'minion',
      health: 2,
      punch: {
        type: 'punch',
        damage: 1,
        desc: 'Punch',
        image: 'images/fist.jpg',
        usedSound: 'sounds/monster-mystic-alive.wav'
      },
      desc: '-SKELETON MAGE- Not all coals lie quietly in their beds of cold ash.',
      image: 'images/skull.gif',
      usedSound: 'sounds/monster-mystic-dies.wav',
      weapon: {
        type: 'weapon',
        damage: 5,
        duration: 1,
        desc: '-FIREBALL- (4)ATK/(1)DUR Equip it and burn the enemy. Single use.',
        image: 'images/fireball.gif',
        usedSound: 'sounds/fireball.wav'
      }
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
      desc: '-INSANE SKELETON- Not all coals lie quietly in their beds of cold ash.',
      image: 'images/skull.gif',
      usedSound: 'sounds/monster-bones-dies.wav',
      weapon: {
       type: 'weapon',
       damage: 3,
       duration: 1,
       desc: '-BOMB- (3)ATK/(1)DUR Equip it and throw it at the enemy. Single use.',
       image: 'images/bomb.gif',
       usedSound: 'sounds/bomb.wav'
      }
    },
    {
      type: 'minion',
      health: 2,
      punch: {
        type: 'punch',
        damage: 2,
        desc: 'Punch',
        image: 'images/fist.jpg',
        usedSound: 'sounds/monster-orc-alive.ogg'
      },
      desc: '-ORC ARCHER- "My arrows will ever find you."',
      image: 'images/orc.gif',
      usedSound: 'sounds/monster-orc-dies.wav',
      weapon: {
       type: 'weapon',
       damage: 2,
       duration: 3,
       desc: '-SWIFT BOW- (2)ATK/(3)DUR Equip it and let the arrows rain.',
       image: 'images/bow.gif',
       usedSound: 'sounds/arrow.wav'
      }
    },
    {
      type: 'boss',
      health: 12,
      punch: {
        type: 'punch',
        damage: 3,
        desc: 'Punch',
        image: 'images/fist.jpg',
        usedSound: 'sounds/monster-lizard-alive.wav'
      },
      desc: '-OCTOGIRL- A cosmic nightmare. Fear.',
      image: 'images/boss2.gif',
      usedSound: 'sounds/monster-lizard-dies.wav'
    }
  ]
}

module.exports = game;
