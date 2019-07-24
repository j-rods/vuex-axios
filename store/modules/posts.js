// import posts from '@/api/posts'

const state = {
  posts: [],
}

const actions = {
  loadPosts({ commit }) {
    // posts.get()
    //   .then(response => {
    //     console.log('hi', response)
        // let posts = response.data
        let posts = [
          {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
          {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
          {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
        ]
    //     commit('SET_POSTS', posts)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    commit('SET_POSTS', posts)
  }
}

const mutations = {
  SET_POSTS (state, posts) {
    state.posts = posts
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

