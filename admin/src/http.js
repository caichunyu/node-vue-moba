import axios from 'axios'
import Vue from "vue";
import router from "@/router";

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

// header里加token

http.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, error => {
  return Promise.reject(error)
})

//对接口返回的错误信息进行拦截处理
http.interceptors.response.use(res => {
  return res
}, error => {
  if (error.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: error.response.data.message
    })
    // console.log(error.response)
    if (error.response.status === 401){
      router.push('/login')
    }
  }
  return Promise.reject(error)
})

export default http
