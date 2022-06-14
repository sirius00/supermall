import axios from 'axios'

export function request(config){
  //创建 axios 实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000' ,
    timeout:5000
  })

  //2 axios的拦截器
  //2.1 请求拦截器
  instance.interceptors.request.use(config =>{
    return config
  }, err =>{
    //console.log(err)
  })

  //2.2响应拦截器
  instance.interceptors.response.use(res =>{
    return res.data
  },err => {
    console.log(err)
  })

  return instance(config)

}
