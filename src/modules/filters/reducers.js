import createReducer from '../../utils/create-reducer'
import { GET_FILTERS } from './actions'

const INITIAL_STATE = []

export const filters = createReducer(INITIAL_STATE, {
  [GET_FILTERS.FULFILLED]: (state, { payload }) => payload,
})
