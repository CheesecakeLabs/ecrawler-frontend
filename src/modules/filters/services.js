import request from '../../services/request-backend'
import storageService from '../../services/storage-service'

const enforceArray = element => (Array.isArray(element) ? element : [])

export default {
  list: () =>
    request.get('filters', {
      headers: {
        Authorization: `Token ${storageService().get('auth-token')}`,
      },
    }).then(filters => enforceArray(filters)),

  runCrawler: () => request.get('crawl', {
    headers: {
      Authorization: `Token ${storageService().get('auth-token')}`,
    },
  }),
}
