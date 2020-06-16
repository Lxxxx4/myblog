import axios from 'axios'
import qs from 'querystring'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '/api'
}
axios.defaults.timeout = 30000 // 默认超时时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' //post默认请求头

// 请求拦截器
axios.interceptors.request.use((config) => {
  const token = localStorage.token
  if (token) {
    config.headers.token = token
  }
  return config
}, err => {
  return Promise.reject(err)
})
//响应拦截器

// get封装
export function get(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, {
        params: params        
    }).then(res => {
        resolve(res.data);
    }).catch(err =>{
        reject(err.data)        
    })    
  })
}
//post封装
export function post(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params), config)
    .then(res => {
      resolve(res.data);
    })
    .catch(err =>{
      reject(err.data)
    })
  })
}
//postBybody封装
export function postBybody(url, params, config = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, config)
    .then(res => {
      resolve(res.data);
    })
    .catch(err =>{
      reject(err.data)
    })
  })
}