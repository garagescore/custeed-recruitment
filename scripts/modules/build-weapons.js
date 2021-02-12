// Thank you https://www.fantasynamegenerators.com/sword-names.php
const weaponSubtypes = require('../assets/weapon-subtypes.json');
const { genericNames, epicNames } = require('../assets/weapon-name-dataset.json');
const { randomElement } = require('./_common');

const weaponTypes = ['axe', 'bow', 'dagger', 'hammer', 'staff', 'sword'];
const elements = ['earth', 'wind', 'fire', 'water'];

const generateWeaponName = (weaponType) => {
  const diceRoll = Math.random();
  // 5% chance is to have an epic
  if (diceRoll > 0.95) {
    return randomElement(epicNames);
  }
  return `${randomElement(genericNames)} ${randomElement(weaponSubtypes[weaponType])}`;
};

const getRandomWeapon = () => {
  const type = randomElement(weaponTypes);
  const element = randomElement(elements);
  const damage = Math.ceil(Math.random() * 100);
  return {
    name: generateWeaponName(type),
    type,
    damage,
    element,
  };
};

module.exports = {
  buildWeaponsData() {
    return Array.from(Array(10000)).map(getRandomWeapon);
  },
};
