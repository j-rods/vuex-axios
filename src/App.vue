<template>
  <div id="app">
    {{ this.$store.state.test }}
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
