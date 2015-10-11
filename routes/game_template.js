var game = {
  maxHealth: 10,
  time: 10,

  player: {
    health: 10,
    damage: 1,
    weapon: null,
  },

  desc: 'Estas en un laberinto intentando escapar',
  image: 'images/laberinto.jpg',
  sounds: ['sounds/enter-laberint.mp3', 'sounds/leave-laberint.mp3'],

  deck: [
    {
      type: 'potion',
      health: 5,
      desc: 'Un peque;o frasco azul',
      image: 'images/potion.png',
      sounds: ['sounds/glu-glu-glu.mp3', 'sounds/meda']
    },
    {
      type: 'weapon',
      damage: 2,
      duration: 3,
      desc: 'Un martillo',
      image: 'images/hammer.jpeg'
    },
    {
      type: 'weapon',
      damage: 45,
      duration: 1,
      desc: 'Un hacha',
      image: 'images/axe.jpeg'
    },
    {
      type: 'minion',
      health: 4,
      damage: 2,
      desc: 'Un esqueleto salvaje',
      image: 'images/skull.gif'
    },
    {
      type: 'minion',
      health: 4,
      damage: 2,
      desc: 'Un esqueleto armado',
      image: 'images/skull.gif',
      weapon: {
        type: 'weapon',
        damage: 4,
        duration: 2,
        desc: 'palo',
        image: 'images/palo.jpeg'
      }
    },
    {
      type: 'boss',
      health: 40,
      damage: 20,
      desc: 'Nicolas Cage',
      image: 'images/boss.gif'
    }
  ]
}

module.exports = game;
