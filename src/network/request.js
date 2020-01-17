import axios from 'axios'

export function request(config) {
    const instance1 = axios.create({
        baseURL:"http://123.207.32.32:8000/api/hy",
        // timeout: 5000
    })
    
    //请求拦截
    instance1.interceptors.request.use(
        config => {
        return config
    },err => {

    })
    //响应拦截
    instance1.interceptors.response.use(config => {
        return config.data
        
    },err => {

    })

    return instance1(config)
}

// export function request(config) {
//     return new Promise((resolve,reject) => {
//         const instance1 = axios.create({
//                 baseURL:"http://123.207.32.32:8000",
//                 timeout: 5000
//             })
            
//             instance1(config)
//             .then(res => {
//                 resolve(res)
//             })
        
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

// export function request(config, success, failure) {
//     const instance1 = axios.create({
//         baseURL:"http://123.207.32.32:8000",
//         timeout: 5000
//     })

//     instance1(config)
//     .then(res => {
//         success(res)
//     })

//     .catch(err => {
//         failure(err)
//     })
// }