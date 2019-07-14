
import axios from 'axios'

import { getToken, isAuthenticated } from 'services/auth'

const api = axios.create({
  baseURL: 'http://localhost:5000/',
  responseType: 'json'
})

api.interceptors.request.use(request => {
  if (isAuthenticated()) {
    request.headers = { 'Authorization': `Bearer ${getToken()}` }
  }
  return request
})

export default api
