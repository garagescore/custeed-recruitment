const playerClasses = [
  {
    name: 'Assassin',
    strength: 'air',
    weakness: 'earth',
    initialSkills: {
      health: 0,
      earth: 0,
      air: 0,
      fire: 0,
      water: 0,
    },
  },
  {
    name: 'Barbarian',
    strength: 'earth',
    weakness: 'fire',
    initialSkills: {
      health: 0,
      earth: 0,
      air: 0,
      fire: 0,
      water: 0,
    },
  },
  {
    name: 'Wizard',
    strength: 'fire',
    weakness: 'water',
    initialSkills: {
      health: 0,
      earth: 0,
      air: 0,
      fire: 0,
      water: 0,
    },
  },
  {
    name: 'Archer',
    strength: 'water',
    weakness: 'air',
    initialSkills: {
      health: 0,
      earth: 0,
      air: 0,
      fire: 0,
      water: 0,
    },
  },
];

module.exports = {
  buildPlayerClassesData() {
    return playerClasses;
  },
};
