import request from '../../services/request-backend'

export const list = (key) => request.get('api/v1/filters/', { key })

export const runCrawler = (key) => request.get('api/v1/crawl/', { key })
