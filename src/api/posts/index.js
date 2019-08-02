import axios from 'axios'

export const get = data => axios.get('https://jsonplaceholder.typicode.com/posts')