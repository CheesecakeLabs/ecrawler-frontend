import * as filterService from './services'
import defineAction from '../../utils/define-action'

export const GET_FILTERS = defineAction('GET_FILTERS')

export const getFilters = () => (dispatch, getState) => dispatch({
  type: GET_FILTERS,
  payload: filterService.list(getState().auth),
})

export const runCrawler = () => (dispatch, getState) => dispatch({
  type: GET_FILTERS,
  payload: filterService.runCrawler(getState().auth),
})
