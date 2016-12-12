import httpClient from '../../services/http-client'


export default {
  list() {
    return httpClient.get('filters/')
  },
}
