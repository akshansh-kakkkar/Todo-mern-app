import axios from 'axios'

const api = axios.create({
  baseURL: 'https://todo-mern-app-1-amy3.onrender.com/',
})

export default api
