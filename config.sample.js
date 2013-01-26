module.exports.mode = 'development';

module.exports.db = {
  host:'localhost',
  port:28015,
  db:'spaceburg'
};


module.exports.testUsers = [
  {
    name:'Francis',
    username:'francis',
    password:'password',
    level:2,
    masteries: null
  },
  {
    name:'Bill',
    username:'bill',
    password:'password',
    level:6,
    masteries: {
      max_shield: 3,
      energy_regen: 2,
      rapid_fire: 1
    }
  },
  {
    name:'Louis',
    username:'louis',
    password:'password',
    level:2,
    masteries: {
      max_shield: 5,
      energy_regen: 0,
      rapid_fire: 2
    }
  },
  {
    name:'Zoe',
    username:'zoe',
    password:'password',
    level:7,
    masteries: {
      max_shield: 5,
      energy_regen: 0,
      rapid_fire: 2
    }
  }
];
