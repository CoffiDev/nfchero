var game = {
  maxHealth: 10,
  time: 10,
  player: {
    health: 10,
    damage: 1,
    weapon: null,
  },
  deck: [
    {
      type: 'potion',
      health: 5
    },
    {
      type: 'weapon',
      damage: 2,
      duration: 3
    },
    {
      type: 'weapon',
      damage: 45,
      duration: 1
    },
    {
      type: 'minion',
      health: 4,
      damage: 2
    },
    {
      type: 'minion',
      health: 4,
      damage: 2,
      weapon: {
        type: 'weapon',
        damage: 4,
        duration: 2
      }
    },
    {
      type: 'boss',
      health: 40,
      damage: 20
    }
  ]
}

module.exports = game;
