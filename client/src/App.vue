<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hello world</router-link>
      <span class="separator">&nbsp;|&nbsp;</span>
    </div>
    <div id="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #061734;

  #nav {
    padding: 34px 62px;
    img {
      margin-right: 30px;
    }
    span.separator {
      vertical-align: super;
    }
    a {
      vertical-align: super;
      font-weight: bold;
      color: #bbcfd8;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  #container {
    max-width: 60%;
    margin: auto;
    margin-top: 30px;
  }
}
</style>
