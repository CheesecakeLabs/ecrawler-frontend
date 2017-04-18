import { GET_FILTERS } from './actions'
import createReducer from '../../utils/create-reducer'

const INITIAL_STATE = []

export const filters = createReducer(INITIAL_STATE, {
  [GET_FILTERS.FULFILLED]: (state, { payload }) => payload,
})
