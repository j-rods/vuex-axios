import axios from 'axios'

export const loadPosts = data => axios.get('https://jsonplaceholder.typicode.com/posts')