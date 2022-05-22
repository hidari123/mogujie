import axios from 'axios'

const instance = axios.create({
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    return config
  }
)

// 响应拦截
instance.interceptors.response.use(
  Response => {

  }
)

export default instance
