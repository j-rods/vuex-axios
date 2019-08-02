// import posts from '@/api/posts'
import axios from 'axios'
const state = {
  posts: ['hoge'],
}

// const actions = {
//   loadPosts({ commit }) {
//     // posts.get()
//     //   .then(response => {
//     //     console.log('hi', response)
//         // let posts = response.data
//         let posts = [
//           {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
//           {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
//           {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
//         ]
//     //     commit('SET_POSTS', posts)
//     //   })
//     //   .catch(error => {
//     //     console.log(error)
//     //   })
//     commit('SET_POSTS', posts)
//   }
// }

const getters = {}

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
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

