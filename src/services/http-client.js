import axios from 'axios'
import storageService from './storage-service'

export default {
  // generic methods with Authorization
  get(url, payload = {}) {
    return axios({
      method: 'get',
      url,
      params: payload,
      headers: { Authorization: storageService().get('auth-token') },
    })
  },

  post(url, payload = {}) {
    return axios({
      method: 'post',
      url,
      data: payload,
      headers: { Authorization: storageService().get('auth-token') },
    })
  },

  patch(url, payload = {}) {
    return axios({
      method: 'patch',
      url,
      data: payload,
      headers: { Authorization: storageService().get('auth-token') },
    })
  },

  delete(url = {}) {
    return axios({
      method: 'delete',
      url,
      headers: { Authorization: storageService().get('auth-token') },
    })
  },
}
