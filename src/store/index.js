import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import posts from './modules/posts/posts.js'

Vue.use(Vuex, axios)

const store = new Vuex.Store({
    modules: {
        posts
    }
})

export default store;