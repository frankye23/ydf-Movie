import { hash } from 'ohash'

const fetch = (url, options, headers) => {

  const reqUrl = VITE_API_HOST + url // 你的接口地址

  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
  const key = hash(JSON.stringify(options) + url)

  // 可以设置默认headers例如
  const customHeaders = { token: useCookie('token').value, ...headers }

  return new Promise((resolve, reject) => {
    useFetch(reqUrl, { ...options, key, headers: customHeaders }).then(({ data, error }) => {
      if (error.value) {
        reject(error.value)
        return
      }
      const value = data.value
      console.log('useFetchResData: ', value)
      if (!value) {
        // 这里处理错你自定义的错误，例如code !== 1
        throw createError({
          statusCode: 500,
          statusMessage: reqUrl,
          message: '自己后端接口的报错信息',
        })
      } else {
        resolve(value)
      }
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

export default class Http {

  get(url, params, headers) {
    return fetch(url, { method: 'get', params }, headers)
  }

  post (url, params, headers) {
    return fetch(url, { method: 'post', params }, headers)
  }

  put (url, params, headers) {
    return fetch(url, { method: 'put', params }, headers)
  }

  delete (url, params, headers) {
    return fetch(url, { method: 'delete', params }, headers)
  }
}