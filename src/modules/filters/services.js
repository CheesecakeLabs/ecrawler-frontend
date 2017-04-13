import request from '../../services/request-backend'

export const list = (key) => request.get('filters/', { key })

export const runCrawler = (key) => request.get('crawl/', { key })
