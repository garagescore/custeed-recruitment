// We got 10k random names in a CSV file which we will parse in order to create the players data
// Some attributes will be randomized
const fs = require('fs');
const { randomElement } = require('./_common');
// n is the amount of players we want
const extractPlayerBasicInfoFromCSV = (n = 1000) => {
  const fileContent = fs.readFileSync(__dirname + '/../assets/playerBasicInfo.csv', 'utf8');
  const [headerLine, ...playerInfoLines] = fileContent.split('\n').filter((line) => line);
  return playerInfoLines.splice(0, n);
};

// Building a player
const getSkillMultiplier = (skillName, { strength, weakness }) => {
  if (skillName === strength) return 0.5;
  if (skillName === weakness) return 0.1;
  return 0.2;
};
const assignSkillPoints = (level, playerClass) => {
  const totalSkillPoints = level * 4;
  const skillsArray = ['earth', 'wind', 'fire', 'water'];
  const { skillThresholds } = skillsArray.reduce(
    (res, skillName) => {
      const skillMultiplier = getSkillMultiplier(skillName, playerClass);
      res.skillThresholds[skillName] = skillMultiplier + res.sum;
      res.sum += skillMultiplier;
      return res;
    },
    { sum: 0, skillThresholds: {} }
  );

  const randomDiceRolls = Array.from(Array(totalSkillPoints)).map(() => {
    const raw = Math.random();
    let skillName; // part of failsafe
    for (skillName of skillsArray) {
      if (raw < skillThresholds[skillName]) {
        return skillName;
      }
    }
    return skillName; // Failsafe
  });

  return randomDiceRolls.reduce((res, skillName) => {
    res[skillName] = res[skillName] + 1;
    return res;
  }, Object.fromEntries(skillsArray.map((skillName) => [skillName, 0])));
};
const buildSkills = (playerClass, level) => {
  const health = Math.round(100 * level * (1 + (level - 1) / 20));

  const { earth, wind, fire, water } = assignSkillPoints(level, playerClass);
  return { health, earth, wind, fire, water };
};

const buildPlayer = ({ firstName, lastName, username, age }, playerClasses, availableWeapons) => {
  const level = parseInt(age, 10);
  const playerClass = randomElement(playerClasses);
  const weapon = randomElement(availableWeapons)._id;
  return {
    name: `${firstName} ${lastName}`,
    playerClass: playerClass.name,
    level,
    skills: buildSkills(playerClass, level),
    weapon,
    score: 0,
  };
};

const buildPlayersDataFromLines = (playerInfoLines, playerClasses, weapons) => {
  // Format is firstName, lastName, username, age
  return playerInfoLines.map((playerInfoLine) => {
    const [firstName, lastName, username, age] = playerInfoLine.split(',');
    return buildPlayer({ firstName, lastName, username, age }, playerClasses, weapons);
  });
};

module.exports = {
  buildPlayersData(playerClasses, weapons) {
    const playerInfoLines = extractPlayerBasicInfoFromCSV();
    return buildPlayersDataFromLines(playerInfoLines, playerClasses, weapons);
  },
};
