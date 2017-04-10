import filterService from './services'
import defineAction from '../../utils/define-action'

export const GET_FILTERS = defineAction('GET_FILTERS')

export const getFilters = () => ({
  type: GET_FILTERS,
  payload: filterService.list(),
})

export const runCrawler = () => ({
  type: GET_FILTERS,
  payload: filterService.runCrawler(),
})
