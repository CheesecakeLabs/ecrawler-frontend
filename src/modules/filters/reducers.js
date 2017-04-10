import createReducer from '../../utils/create-reducer'
import { GET_FILTERS } from './actions'

const INITIAL_STATE = []

const filters = createReducer(INITIAL_STATE, {
  [GET_FILTERS.FULFILLED]: (state, { payload }) => payload,
})

export default filters
