var game = {
  maxHealth: 10,
  time: 10,

  player: {
    health: 10,
    damage: 1,
    punch: {
      type: 'punch',
      damage: 1,
      desc: 'Punch',
      image: 'images/fist.jpg'
    },
    weapon: null,
    image: 'images/potion.jpg',
    sounds: ['sounds/player-dies.wav']
  },

  desc: 'You are trapped and you dont know why',
  image: 'images/laberinto0.jpg',
 // sounds: ['sounds/enter-laberint.mp3', 'sounds/leave-laberint.mp3'],

  deck: [
  	{
      type: 'downstairs',
      desc: 'You found a passage to a lower floor.',
      image: 'images/potion.jpg',
      sounds: ['sounds/stairs.wav']
    },
    {
      type: 'potion',
      health: 5,
      desc: 'A little flask with a sparkling blue elixir.',
      image: 'images/potion.jpg',
      sounds: ['sounds/potion-drink.wav', 'sounds/potion-ignore.wav']
    },
    {
      type: 'weapon',
      damage: 3,
      duration: 2,
      desc: 'An old mace.',
      image: 'images/potion.jpg',
      sounds: ['sounds/mace.wav']
    },
    {
      type: 'weapon',
      damage: 2,
      duration: 3,
      desc: 'A shiny longsword.',
      image: 'images/potion.jpg',
      sounds: ['sounds/sword.wav']
    },
    {
      type: 'weapon',
      damage: 3,
      duration: 1,
      desc: 'A bomb.',
      image: 'images/potion.jpg',
      sounds: ['sounds/bomb.wav']
    },
    {
      type: 'weapon',
      damage: 2,
      duration: 3,
      desc: 'A bow with spare arrows.',
      image: 'images/potion.jpg',
      sounds: ['sounds/arrow.wav']
    },
    {
      type: 'weapon',
      damage: 4,
      duration: 1,
      desc: 'A fireball scroll.',
      image: 'images/potion.jpg',
      sounds: ['sounds/fireball.wav']
    },
    {
      type: 'minion',
      health: 2,
      punch: {
        type: 'punch',
        damage: 3,
        desc: 'Punch',
        image: 'images/fist.jpg'
      },
      desc: 'A nasty orc.',
      image: 'images/potion.jpg',
      sounds: ['sounds/monster-orc-alive.wav, sounds/monster-orc-dies.wav'],
      weapon: {
        type: 'weapon',
        damage: 4,
        duration: 2,
        desc: 'A waraxe.',
        image: 'images/palo.jpeg'
      }
    },
    {
      type: 'minion',
      health: 2,
      punch: {
        type: 'punch',
        damage: 5,
        desc: 'Punch',
        image: 'images/fist.jpg'
      },
      desc: 'A terrifying beholder.',
      image: 'images/potion.jpg',
      sounds: ['sounds/monster-mystic-alive.wav, sounds/monster-mystic-dies.wav']
    },
    {
      type: 'minion',
      health: 4,
      punch: {
        type: 'punch',
        damage: 2,
        desc: 'Punch',
        image: 'images/fist.jpg'
      },
      desc: 'A creepy spider.',
      image: 'images/potion.jpg',
      sounds: ['sounds/monster-buzz-alive.wav, sounds/monster-buzz-dies.wav']
    },
    {
      type: 'minion',
      health: 2,
      punch: {
        type: 'punch',
        damage: 2,
        desc: 'Punch',
        image: 'images/fist.jpg'
      },
      desc: 'A weird skeleton.',
      image: 'images/potion.jpg',
      sounds: ['sounds/monster-bones-alive.wav, sounds/monster-bones-dies.wav'],
      weapon: {
        type: 'weapon',
        damage: 3,
        duration: 1,
        desc: 'A dagger.'
      }
    },
    {
      type: 'minion',
      health: 5,
      punch: {
        type: 'punch',
        damage: 1,
        desc: 'Punch',
        image: 'images/fist.jpg'
      },
      desc: 'A gigantic cyclops.',
      image: 'images/potion.jpg',
      sounds: ['sounds/monster-humanlike-alive.wav, sounds/monster-humanlike-dies.wav'],
      weapon: {
        type: 'weapon',
        damage: 3,
        duration: 2,
        desc: 'A sickle.'
      }
    },
    {
      type: 'boss',
      health: 10,
      punch: {
        type: 'punch',
        damage: 2,
        desc: 'Punch',
        image: 'images/fist.jpg'
      },
      desc: 'A giant Cthulu-like cosmic creature.'
    }
  ]
}

module.exports = game;