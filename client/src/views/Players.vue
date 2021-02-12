<template>
  <div class="players">
    <PlayersList></PlayersList>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayersList from '@/components/PlayersList.vue';

export default {
  name: 'players',
  components: {
    PlayersList,
  },
};
</script>
