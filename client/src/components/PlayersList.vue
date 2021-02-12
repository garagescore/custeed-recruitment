<template>
  <div class="table">
    <div class="table__header">
      <div class="table__header__cell">Name</div>
      <div class="table__header__cell">Class</div>
      <div class="table__header__cell">Level</div>
      <div class="table__header__cell">Score</div>
      <div class="table__header__cell table__header__cell--wide">Skills (health / earth / wind / fire / water)</div>
    </div>
    <div class="table__row" v-for="player in players">
      <div class="table__row__cell">{{ player.name }}</div>
      <div class="table__row__cell">{{ player.playerClass }}</div>
      <div class="table__row__cell">{{ player.level }}</div>
      <div class="table__row__cell">{{ player.score }}</div>
      <div class="table__row__cell table__row__cell--wide">
        {{ player.skills.health }} / {{ player.skills.earth }} / {{ player.skills.wind }} / {{ player.skills.fire }} /
        {{ player.skills.water }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayersList',
  props: {},
  data() {
    return {
      players: [
        {
          id: '6026f0ce70e1416b39fba375',
          name: 'Antônio Correia',
          playerClass: 'Barbarian',
          level: 95,
          skills: {
            health: 54150,
            earth: 203,
            wind: 67,
            fire: 42,
            water: 68,
          },
          weapon: '6026f0cd70e1416b39fb82d7',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba376',
          name: 'Jonas Kaestner',
          playerClass: 'Wizard',
          level: 87,
          skills: {
            health: 46110,
            earth: 76,
            wind: 68,
            fire: 169,
            water: 35,
          },
          weapon: '6026f0cd70e1416b39fb7f77',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba377',
          name: 'Komimasa Oonishi',
          playerClass: 'Archer',
          level: 28,
          skills: {
            health: 6580,
            earth: 31,
            wind: 27,
            fire: 14,
            water: 40,
          },
          weapon: '6026f0cd70e1416b39fb8f4d',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba378',
          name: 'Jasmine Konovalova',
          playerClass: 'Assassin',
          level: 66,
          skills: {
            health: 28050,
            earth: 23,
            wind: 48,
            fire: 46,
            water: 147,
          },
          weapon: '6026f0cd70e1416b39fb7f19',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba379',
          name: 'Rafael Monroe',
          playerClass: 'Wizard',
          level: 67,
          skills: {
            health: 28810,
            earth: 50,
            wind: 55,
            fire: 138,
            water: 25,
          },
          weapon: '6026f0cd70e1416b39fb8e64',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba37a',
          name: 'Charli Vogel',
          playerClass: 'Assassin',
          level: 39,
          skills: {
            health: 11310,
            earth: 23,
            wind: 25,
            fire: 37,
            water: 71,
          },
          weapon: '6026f0cd70e1416b39fb91c1',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba37b',
          name: 'Sandra Fokina',
          playerClass: 'Archer',
          level: 45,
          skills: {
            health: 14400,
            earth: 33,
            wind: 30,
            fire: 27,
            water: 90,
          },
          weapon: '6026f0cd70e1416b39fb84eb',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba37c',
          name: 'Ashton Hester',
          playerClass: 'Assassin',
          level: 48,
          skills: {
            health: 16080,
            earth: 16,
            wind: 38,
            fire: 44,
            water: 94,
          },
          weapon: '6026f0cd70e1416b39fb809d',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba37d',
          name: 'Jacqueline Hachée',
          playerClass: 'Barbarian',
          level: 86,
          skills: {
            health: 45150,
            earth: 160,
            wind: 69,
            fire: 31,
            water: 84,
          },
          weapon: '6026f0cd70e1416b39fba23c',
          score: 0,
        },
        {
          id: '6026f0ce70e1416b39fba37e',
          name: 'Flaviano Briseño',
          playerClass: 'Barbarian',
          level: 16,
          skills: {
            health: 2800,
            earth: 33,
            wind: 14,
            fire: 6,
            water: 11,
          },
          weapon: '6026f0cd70e1416b39fb7cf6',
          score: 0,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  display: flex;
  flex-direction: column;

  &__header {
    border-bottom: 1px solid red;
  }

  &__header,
  &__row {
    display: flex;
    flex-direction: row;
    &__cell {
      flex-grow: 1;
      flex-basis: 0;
      margin: 5px;
      &--wide {
        flex-grow: 2;
      }
    }
  }
}
</style>
