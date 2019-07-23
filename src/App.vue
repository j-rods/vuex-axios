<template>
  <div id="app">
    <h5 v-for="post in posts" v-bind:key="post.id">{{post.title}}</h5>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  mounted () {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapState([
        'posts'
    ])
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
