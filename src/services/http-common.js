import axios from 'axios'

const http = axios.create({
  baseURL: 'http://www.codingjunior.shop/api/v1/',
  headers: {
    'Content-type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
  },
})

export default function request(config) {
  return http.request(config)
}
