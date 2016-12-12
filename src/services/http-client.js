import axios from 'axios'
import storageService from './storage-service'
import Config from '../config/api'


export default {
  // generic methods with Authorization
  get(url, payload = {}) {
    return axios({
      method: 'get',
      url: Config.API_URL + url,
      params: payload,
      headers: { Authorization: storageService().get('auth-token') },
    })
  },

  post(url, payload = {}) {
    return axios({
      method: 'post',
      url: Config.API_URL + url,
      data: payload,
      headers: { Authorization: storageService().get('auth-token') },
    })
  },

  patch(url, payload = {}) {
    return axios({
      method: 'patch',
      url: Config.API_URL + url,
      data: payload,
      headers: { Authorization: storageService().get('auth-token') },
    })
  },

  delete(url = {}) {
    return axios({
      method: 'delete',
      url: Config.API_URL + url,
      headers: { Authorization: storageService().get('auth-token') },
    })
  },
}
