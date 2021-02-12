<template>
  <div class="home">
    <HelloWorld :msg="hello.msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import gql from 'graphql-tag';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  apollo: {
    hello: gql`
      query {
        hello {
          msg
        }
      }
    `,
  },
  data() {
    return {
      hello: {},
    };
  },
};
</script>
