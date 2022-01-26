const axios = require('axios')

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 6000,
})

request.interceptors.request.use(function(config){
  console.log('发送请求之前' + Date.now())
  return config
}, function(error){
  console.log('发送请求错误' + Date.now())
  return Promise.reject(error)
})