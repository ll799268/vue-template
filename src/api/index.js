// import axios from 'axios';
// import { Toast } from 'vant';

// let toast = null

// const request = axios.create()

// // request 拦截器
// request.interceptors.request.use(
//   config => {
//     config.headers['content-type'] = config.contentType || 'application/json;charset=UTF-8'

//     toast = Toast.loading({
//       duration: 0,
//       message: '加载中...',
//       forbidClick: true,
//     })

//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   }
// )

// // response 拦截器
// request.interceptors.response.use(
//   response => {
//     toast.close()
//     return response
//   },
//   error => {
//     Toast.fail('加载失败！');
//     return Promise.reject(error)
//   }
// )

// export default request