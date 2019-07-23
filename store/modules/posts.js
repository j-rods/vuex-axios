import shopApi from '../../api/posts/index'

const state = {
  posts: [],
}

const actions = {
  loadPosts({ commit }) {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        let posts = response.data
        commit('SET_POSTS', posts)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  }
}

export default {
  state,
  actions,
  mutations
}

