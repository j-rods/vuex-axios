import * as posts from '@/api/posts/index';

const state = {
  posts: [],
};

const actions = {
  loadPosts({ commit }) {
    posts.getPosts()
      .then(response => {
        const posts = response.data;
        commit('SET_POSTS', posts);
      })
      .catch(error => {
        console.log(error);
      });
  },
};

const getters = {};

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
