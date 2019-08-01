<template>
  <div id="app">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="pink" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Posts</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>check_circle</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line>
            <template v-for="(post, index) in posts">
              <v-list-tile :key="post.title" avatar ripple @click="toggle(index)">
                <v-list-tile-content>
                  <v-list-tile-title>{{ post.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ post.body }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider v-if="index + 1 < posts.length" :key="index"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('loadPosts');
  },
  computed: {
    ...mapState(['posts']),
  },
  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index);
      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0px 60px 0px;
}
</style>
